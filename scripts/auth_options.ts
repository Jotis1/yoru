import { AuthOptions, User } from 'next-auth';

import { MongoDBAdapter } from '@auth/mongodb-adapter';

import createUser from './create_user';

import providers from '@/scripts/providers';
import { authClient } from './connection';

const authOptions: AuthOptions = {
    adapter: MongoDBAdapter(authClient),
    providers: providers,
    session: { strategy: 'jwt' },
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
        async signIn(params) {
            if (params.user) {
                const db = (await authClient).db();

                const userData = await db.collection('users').findOne({ email: params.user.email });

                if (!userData) {
                    return '/new_user';
                }

                return "/news";
            } else {
                return false;
            }
        },
        async session({ session }) {

            const db = (await authClient).db();

            if (!session.user) return session;

            const userSession = session.user;
            const userData = await db.collection('users').findOne({ email: userSession.email });

            if (!userData) return session;

            session.user = userData as { name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; };

            return session
        }
    },
    events: {
        createUser: async (message) => {
            await createUser(message);
        },
    },
};

export default authOptions;
