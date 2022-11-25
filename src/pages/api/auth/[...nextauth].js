import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { authServices } from '../../../../services/auth.service'

export const authOptions = {
  pages: {
    signIn: '/login'
  },
  // secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        console.log('CredentialsProvider credentials', credentials);
        try {
          const results = await authServices.login({
            email: credentials?.email,
            password: credentials?.password,
          })

          console.log('authServices.login.results', results);

          if (results.access_token) {
            return results
          }

          return null
        } catch (error) {
          return Promise.reject(error.response.data)
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('jwt.token', token);
      console.log('jwt.user', user);

      if (token && user) {
        console.log('jwt.token new', token);
        console.log('jwt.user new', user);

        return {
          ...token,
          accessToken: user.access_token
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session;
    }
  }
}

export default NextAuth(authOptions)