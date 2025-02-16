import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const MONGODB_URI = process.env.MONGODB_URI;

// Define the type for our cached mongoose connection
interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Declare mongooseCache as a property on the global object
declare global {
  let mongooseCache: Cached | undefined;
}

// Use NodeJS.Global type to properly type the global object
const cached: Cached = (global as any).mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!(global as any).mongooseCache) {
  (global as any).mongooseCache = cached;
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
} 