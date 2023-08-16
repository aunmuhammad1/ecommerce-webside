import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "@/lib/mongodb";

export const authOptions = {
  
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),

    
  ],
  adapter: MongoDBAdapter(clientPromise),

  secret: 'my_secret_key_here',
}

export default NextAuth(authOptions)