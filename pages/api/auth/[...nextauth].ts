import prisma from '@lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    KakaoProvider({
      clientId: process.env.NEXTAUTH_KAKAO_KEY || '',
      clientSecret: process.env.NEXTAUTH_KAKAO_SECRET_KEY || '',
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
});
