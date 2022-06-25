import prisma from '@lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
interface ResBody {
  success: boolean;
  message: string;
  data?: any;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResBody>
) {
  const session = await getServerSession(
    { req, res },
    {
      providers: [
        KakaoProvider({
          clientId: process.env.NEXTAUTH_KAKAO_KEY || '',
          clientSecret: process.env.NEXTAUTH_KAKAO_SECRET_KEY || '',
        }),
        // ...add more providers here
      ],
      adapter: PrismaAdapter(prisma),
      secret: process.env.SECRET,
    }
  );
  if (session === null)
    return res
      .status(404)
      .json({ success: false, message: '잘못된 접근입니다.' });
  const email = session.user.email;

  //오늘 날짜 추출
  const currentDate = new Date().toLocaleDateString();
  const getDate = (date: string) => new Date(date).toLocaleDateString();
  //운동 로그 요청
  if (req.method === 'GET') {
    //22/6/2022
    let date = req.query.date
      ? new Date().toLocaleDateString()
      : getDate(req.query.date + '');

    console.log('query', !req.query.date);
    console.log('date', new Date().toLocaleDateString());
    const data = await prisma.user
      .findFirst({
        where: { email: email },
        select: {
          date: {
            select: {
              date_time: true,
              exercise: {
                select: {
                  name: true,
                  weight: true,
                  count: true,
                  set: true,
                  id: true,
                },
              },
            },
          },
        },
      })
      .then((res) =>
        res.date.filter((v) => getDate(v.date_time + '') === date)
      );
    if (!data.length)
      return res
        .status(400)
        .json({ success: false, message: '해당 날짜에 데이터가 없습니다.' });
    return res
      .status(200)
      .json({ success: true, message: '성공', data: data[0].exercise });

    //운동 최초 추가
  } else if (req.method === 'POST') {
    const { name, count, weight, set } = req.body;

    const { id } = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    });

    // console.log(targetDate);
    // post는 당일 데이터만 보낸다.
    //최신 데이터 가져와서 체크

    let targetdate = await prisma.date
      .findMany({
        orderBy: {
          date_time: 'desc',
        },
        take: 1,
        where: {
          userId: id,
        },
      })
      .then((res) => res[0]);

    //만약 해당하는 날짜에 대한 db 가 존재하지 않는 경우 생성한다.
    if (!targetdate || getDate(targetdate.date_time + '') !== currentDate) {
      targetdate = await prisma.date.create({ data: { userId: id } });
    }

    let targetExercise = await prisma.exercise.findMany({
      where: {
        dateId: targetdate.id,
      },
    });

    //해당 하는 날짜의 운동 데이터 확인
    if (
      !targetExercise.length ||
      targetExercise.findIndex((v) => v.name === name) === -1
    ) {
      await prisma.exercise.create({
        data: {
          name: name,
          weight: +weight,
          count: +count,
          set: +set,
          dateId: targetdate.id,
        },
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: '이미 존재하는 운동 목록 입니다.' });
    }

    return res
      .status(201)
      .json({ success: true, message: '운동 목록 추가 완료' });
    //목록 삭제
  } else if (req.method === 'DELETE') {
    let id = req.query.id;
    id = typeof id === 'object' ? id[0] : id;

    let result = await prisma.exercise
      .delete({ where: { id: id } })
      .catch((err) => null);

    if (result === null)
      return res
        .status(400)
        .json({ success: false, message: '해당 id는 존재하지 않습니다.' });

    return res.status(202).json({ success: true, message: '삭제 성공' });

    //목록 수정
  } else if (req.method === 'PUT') {
    const { id, count, weight, set } = req.body;

    let data = await prisma.user.findUnique({
      where: { email: email },
      select: {
        date: {
          orderBy: {
            date_time: 'desc',
          },
          take: 1,
          select: {
            date_time: true,
            exercise: {
              select: { id: true },
            },
          },
        },
      },
    });

    if (data === null || getDate(data.date[0].date_time + '') !== currentDate) {
      return res
        .status(400)
        .json({ success: false, message: '수정은 당일만 가능합니다.' });
    } else if (data.date[0].exercise.findIndex((v) => v.id === id) !== -1) {
      await prisma.exercise.update({
        where: {
          id: id,
        },
        data: {
          count: +count,
          weight: +weight,
          set: +set,
        },
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: '해당 id는 없습니다.' });
    }
    return res.status(201).json({ success: true, message: '정보 수정 성공' });
  } else {
    return res
      .status(404)
      .json({ success: false, message: '잘못된 접근입니다.' });
  }
}
