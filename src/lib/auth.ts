import type { NextAuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Add role to user type
declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user: {
      role?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) return null;
        
        // Validate credentials against environment variables
        const isEmailValid = credentials.email === process.env.ADMIN_EMAIL;
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          process.env.ADMIN_PASSWORD_HASH as string
        );

        // Temporary debug in authorize callback
        console.log('Comparing:', {
          input: credentials.password,
          stored: process.env.ADMIN_PASSWORD_HASH,
          match: isPasswordValid
        });

        if (isEmailValid && isPasswordValid) {
          return {
            id: "1",
            email: process.env.ADMIN_EMAIL,
            role: "admin"
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.role) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token?.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: "/admin/signin",
    error: "/admin/signin"
  },
  session: {
    strategy: "jwt"
  }
};

// After making next.config.ts changes, check logs:
console.log('Loaded environment:', {
  email: process.env.ADMIN_EMAIL?.slice(0, 3) + '...', // Partial reveal for security
  hash: process.env.ADMIN_PASSWORD_HASH?.slice(0, 6) + '...',
  secret: process.env.NEXTAUTH_SECRET?.slice(0, 3) + '...'
}); 