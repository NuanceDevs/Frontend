import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Credentials, { CredentialsProvider } from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers:[
        GithubProvider({
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
                //this is where you would retrieve user data from a database.
                const user = {id: "42", name: 'dave', password: 'nextAuth'}

                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}