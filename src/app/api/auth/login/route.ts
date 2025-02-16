import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Server-side password check
    if (password === process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json(
      { success: false, message: 'Invalid password' },
      { status: 401 }
    );
  } catch (error) {
    // Log the error for debugging while keeping the response generic
    console.error('Login error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 