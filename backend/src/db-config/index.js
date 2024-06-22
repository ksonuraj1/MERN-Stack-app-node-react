import mongoose from 'mongoose';
import DB_NAME from './constant.js';

const connectDB = async () => {
  const mongoDbURI = process.env.MONGO_DB_URI;
  try {
    const mongoInstance = await mongoose.connect(`${mongoDbURI}/${DB_NAME}`);
    console.log('Mongodb connected successfully', mongoInstance);
  } catch (error) {
    console.log('Mongodb connection failed', error);
    process.exit(1);
  }
};
