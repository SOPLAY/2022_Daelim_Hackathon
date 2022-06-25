import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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
  if (session === null || req.method !== 'GET')
    return res
      .status(404)
      .json({ success: false, message: '잘못된  접근입니다.' });

  let { q } = req.query;
  q = typeof q === 'object' ? q[0] : q;

  const url = `https://www.googleapis.com/youtube/v3/search?q=${encodeURI(
    q
  )}&key=${
    process.env.NEXT_PUBLIC_YOUTUBE_SECRET_KEY
  }&fields=items(id,snippet(channelId,title,description,thumbnails,channelTitle))&part=snippet`;

  const data = await axios.get(url).then((res) => res.data);

  return res.status(200).json({ ...data });
}
