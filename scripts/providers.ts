import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import Twitch from 'next-auth/providers/twitch';

const providers = [
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
  }),
];

export default providers;
