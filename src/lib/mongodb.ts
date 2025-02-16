import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

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

let cachedConnection: typeof mongoose | null = null;

export async function connectToDatabase() {
  console.log('Connection attempt to MongoDB...');
  console.log('Current connection state:', mongoose.connection.readyState);
  
  if (cachedConnection) {
    console.log('Using cached connection');
    return cachedConnection;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  try {
    const opts = {
      bufferCommands: false,
    };
    
    const connection = await mongoose.connect(process.env.MONGODB_URI, opts);
    cachedConnection = connection;
    console.log('MongoDB connected successfully');
    return connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
} 