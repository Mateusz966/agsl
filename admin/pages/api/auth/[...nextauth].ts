import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {httpClient} from "../../../config/httpClient";


const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as { email: string; password: string; } ;
        const res = await httpClient.post(`/v1/auth/dashboard/sign-in`, { email, password })
        console.log('resss', res);
        if (res.status === 200) {
          return res.data
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin"
  }
};
export default NextAuth(authOptions);
