import mongoose from "mongoose";
let isConnected = false; // Track the connection

export const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
