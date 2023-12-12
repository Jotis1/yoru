import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth"

import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import DiscordProvider, { DiscordProfile } from "next-auth/providers/discord";
import Twitch, { TwitchProfile } from "next-auth/providers/twitch";

const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: `${process.env.GOOGLE_CLIENT_ID}`,
            clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
        }),
        DiscordProvider({
            clientId: `${process.env.DISCORD_CLIENT_ID}`,
            clientSecret: `${process.env.DISCORD_CLIENT_SECRET}`,
        }),
        Twitch({
            clientId: `${process.env.TWITCH_CLIENT_ID}`,
            clientSecret: `${process.env.TWITCH_SECRET_KEY}`,
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXT_AUTH_SECRET,
    pages: {
        signIn: "/",
    },
    callbacks: {
        signIn: async ({ account, profile }) => {

            if (account?.provider === "google") {
                let googleProfile = profile as GoogleProfile;
            }

            if (account?.provider === "discord") {
                let discordProfile = profile as DiscordProfile;
            }

            if (account?.provider === "twitch") {
                let twitchProfile = profile as TwitchProfile;
            }

            return true;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }