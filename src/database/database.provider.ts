import mongoose from 'mongoose';

export async function connectDatabase() {
  const url = process.env.MONGO_URL;

  if (!url) {
    throw new Error('MONGO_URL not defined in .env');
  }

  await mongoose.connect(url);
  console.log('database connected');
}
