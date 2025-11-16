import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongodb";
import User from "@/app/models/User";

const handler = NextAuth({
  secret: process.env.Secret_Key,
  providers: [
    GithubProvider({
      clientId: process.env.Github_clientId,
      clientSecret: process.env.Github_clientSecret,
    }),
    GoogleProvider({
      clientId: process.env.Google_clientId,
      clientSecret: process.env.Google_clientSecret,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connectDB();
      await User.findOneAndUpdate(
        { email: user.email },
        {
          $set: {
            name: user.name, // Update name
            image: user.image, // Update profile picture
            lastLogin: new Date(), // Log the login time
          },
          $setOnInsert: {
            createdAt: new Date(), // Set createdAt only if new user
          },
        },
        {
          upsert: true, // Create the user if not found
          new: true, // Return the updated or new user
        }
      );

      return true;
    },
  },
});

export { handler as GET, handler as POST };
