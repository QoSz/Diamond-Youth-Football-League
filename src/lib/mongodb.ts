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

// Properly declare the global type augmentation
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: Cached | undefined;
}

const cached: Cached = global.mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase() {
  console.log('Connection attempt to MongoDB...');
  console.log('Current connection state:', mongoose.connection.readyState);
  
  if (cached.conn) {
    console.log('Using cached connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log('Creating new connection promise');
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('MongoDB connected successfully');
        return mongoose;
      })
      .catch((error) => {
        console.error('MongoDB connection error:', {
          message: error.message,
          code: error.code,
          stack: error.stack
        });
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
    console.log('Connection established');
    return cached.conn;
  } catch (e) {
    console.error('Error in connectToDatabase:', e);
    cached.promise = null;
    throw e;
  }
} 