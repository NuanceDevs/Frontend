import type { NextAuthOptions } from "next-auth";
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
            async authorize(credentials: Record<"username" | "password", string> | undefined){
                //User hier ophalen vanuit database en credential check doen 
                const user = {id: "44", name: 'Martijn', password: 'Martijn123', role: 'admin'}

                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user
                } else {
                    return null
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