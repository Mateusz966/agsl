import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { httpClient } from "../../../config/httpClient";
import { appRoutes } from "../../../config/app.routes";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const res = await httpClient.post(appRoutes.api.v1.auth["sign-in"], {
          email,
          password,
        });

        if (res.status === 200) {
          return res.data;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
export default NextAuth(authOptions);
