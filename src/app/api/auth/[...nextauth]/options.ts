import type { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import InstagramProvider from "next-auth/providers/instagram";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Credentials, { CredentialsProvider } from "next-auth/providers/credentials";
import { GithubProfile } from "next-auth/providers/github";
import { redirect } from "next/dist/server/api-utils";
import { ApiGateway } from "@/app/lib/ApiGateway";

type User = {
    id: string;
    name: string;
    password: string;
    role: string;
  };

export const options: NextAuthOptions = {
    providers:[
        GithubProvider({
            profile(profile: GithubProfile){
                return{
                    ...profile,
                    role: profile.role ?? 'user',
                    id: profile.id.toString(),
                    image: profile.avatar_url,
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),

        InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        }),

        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string
        }),

        Credentials({
            name: 'Credentials',
            credentials: {
                username:{
                    label: "Username:",
                    type: "text",
                    placeholder: "Enter your username"
                },
                password:{
                    label: "Password:",
                    type: "password",
                    placeholder: "Enter your password"
                }
            },
            async authorize(credentials: Record<"username" | "password", string> | undefined) {
                try {
                    const endpoint = 'user/authenticate';

                    if (!credentials) {
                        console.error('No credentials provided');
                        return null;
                    }

                    const response = await ApiGateway.postData(JSON.stringify(credentials), endpoint);

                    if (response.ok) {
                        const user = await response.json();
                        return user;
                    } else {
                        console.error('Authentication failed:', response.statusText);
                        return null;
                    }
                } catch (error) {
                    console.error('Error during authentication:', error);
                    return null;
                }
              }
        })
    ],
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user) token.role = user.role
            redirect
            return token
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            redirect
            return session 
        },

        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            return baseUrl
          }
    }
}