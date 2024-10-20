import mongoose from 'mongoose';

const ConnectedDB = async () => {
   try {
      console.log('Mongo URI:', process.env.MONGO_URI); // Log the URI
      const connectDB = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB connected: ${connectDB.connection.host}`);
   } catch (error) {
      console.log('Error connecting to MongoDB:', error.message);
      process.exit(1);
   }
};

export default ConnectedDB;
