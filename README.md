# 2022 Daelim hackathon Team README.md
# [MUSCLE.md](https://2022-daelim-hackathon.vercel.app/)
## ๐ฅ๏ธ Collabrator

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/SOPLAY"><img src="https://avatars.githubusercontent.com/u/40691745?v=4" width="100px;" alt="์ด๋ฏธ์ง"/><br /><sub><b>SOPLAY</b></sub></a><br />๐ญWeb -FullStack</td>
    <td align="center"><a href="https://github.com/UBamtol"><img src="https://avatars.githubusercontent.com/u/98325285?v=4" width="100px;" alt="์ด๋ฏธ์ง"/><br /><sub><b>UBamtol</b></sub></a><br />๐ฆFront-End</td>
    <td align="center"><a href="https://github.com/Mallang-Mallang"><img src="https://avatars.githubusercontent.com/u/70959328?v=4" width="100px;" alt=""/><br /><sub><b>Mallang-Mallang</b></sub></a><br />๐ฆFront-End</td>
  </tr>
</table>

## Convention

- ๋ชจ๋  components ๋ React Arrow Function Component ๋ก ์์ฑํ๋ค.
- ์ปดํฌ๋ํธ ๋ด๋ถ์์ style ๊ด๋ จ ์์๋ค์ ํ๋จ์ ์์น ์ํจ๋ค ( ํต์ฌ ๋ก์ง์ ์๋จ์ ์์น )
- components ์ ํ์ผ๋ช์ UpperCamelCase๋ก ์์ฑ
- .ts ์ .tsx ์ ๊ตฌ๋ถ์ html ํ๊ทธ ์ ๋ฌด๋ก ๊ตฌ๋ถํ๋ค.

## Stack

- Next.Js
- React
- Typescript
- NextAuth ( kakao, google )
- Prisma
- Axios ( fetch๋ก ๋์ฒด ๊ฐ๋ฅ )
- Tailwindcss
- headlessUI
- heroicons

## Folder path

```js
./core
	|-/components
			|-/commons	  //๊ณตํต ์ปดํฌ๋ํธ ์ ์ ex) Button, Container
	|-/atoms          //Recoil Atoms
	|-/hooks          //์ปค์คํ hooks ์ ์

./pages             //Client Side pages
	|-/api            //Server Side

./public
	|-/assets         //ํ๋ก์ ํธ์์ ์ฌ์ฉ๋๋ ์ ์ ์ด๋ฏธ์ง ํ์ผ์ ์ ์ฅํ๋ค.

./prisma            //Prisma ํ์ผ ์์ฑ
./styles            //global style ์์ฑ
.tailwind.config.js //tailwindcss ์ค์  ์์ฑ
```

## Before Starting

### ์์กด์ฑ ํจํค์ง ์ค์น

```
yarn
```

### ๊ฐ๋ฐ ํ๊ฒฝ DB migration

```
npx prisma migration
```

### ๊ฐ๋ฐ ์๋ฒ ์์

```
yarn dev
```
