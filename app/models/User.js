import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  userMessage: { type: String, required: true },
  aiResponse: { type: String, required: true },
  aiCode: { type: String },
});

const AppSchema = new mongoose.Schema({
  AppName: {type: String},
  chats: [ChatSchema]
})

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  image: String,
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  // WebApp: [AppSchema]
});

export default mongoose.models.User || mongoose.model('User', UserSchema);