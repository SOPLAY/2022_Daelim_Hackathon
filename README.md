# 2022 Daelim hackathon Team README.md

## 🖥️ Collabrator

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/SOPLAY"><img src="https://avatars.githubusercontent.com/u/40691745?v=4" width="100px;" alt="이미지"/><br /><sub><b>SOPLAY</b></sub></a><br />🌭Web -FullStack</td>
    <td align="center"><a href="https://github.com/UBamtol"><img src="https://avatars.githubusercontent.com/u/98325285?v=4" width="100px;" alt="이미지"/><br /><sub><b>UBamtol</b></sub></a><br />🦄Front-End</td>
    <td align="center"><a href="https://github.com/Mallang-Mallang"><img src="https://avatars.githubusercontent.com/u/70959328?v=4" width="100px;" alt=""/><br /><sub><b>Mallang-Mallang</b></sub></a><br />🦄Front-End</td>
  </tr>
</table>

## Convention

- 모든 components 는 React Arrow Function Component 로 작성한다.
- 컴포넌트 내부에서 style 관련 요소들은 하단에 위치 시킨다 ( 핵심 로직을 상단에 위치 )
- components 의 파일명은 UpperCamelCase로 작성
- .ts 와 .tsx 의 구분은 html 태그 유무로 구분한다.

## Stack

- Next.Js
- React
- Typescript
- NextAuth ( kakao, google )
- Prisma
- Axios ( fetch로 대체 가능 )
- Tailwindcss
- headlessUI
- heroicons

## Folder path

```js
./core
	|-/components
			|-/commons	  //공통 컴포넌트 정의 ex) Button, Container
	|-/atoms          //Recoil Atoms
	|-/hooks          //커스텀 hooks 정의

./pages             //Client Side pages
	|-/api            //Server Side

./public
	|-/assets         //프로젝트에서 사용되는 정적이미지 파일을 저장한다.

./prisma            //Prisma 파일 작성
./styles            //global style 작성
.tailwind.config.js //tailwindcss 설정 작성
```

## Before Starting

### 의존성 패키지 설치

```
yarn
```

### 개발 환경 DB migration

```
npx prisma migration
```

### 개발 서버 시작

```
yarn dev
```
