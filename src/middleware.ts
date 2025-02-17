import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // Handle cases where the token is not present
      if (!token) return false;
      
      // Check if user has admin role
      return token.role === "admin";
    },
  },
  pages: {
    signIn: "/admin/signin"
  }
});

export function middleware() {
  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  );

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/admin/:path*'
  ],
}; 