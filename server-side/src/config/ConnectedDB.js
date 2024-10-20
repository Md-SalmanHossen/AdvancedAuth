import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const ConnectedDB = async () => {
    try {

        const mongoURI = process.env.MONGO_URI; // This should retrieve the URI from .env

        const connectDB = await mongoose.connect(mongoURI);
        console.log(`MongoDB connected: ${connectDB.connection.host}`);

    } catch (error) {

        console.log('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default ConnectedDB;
