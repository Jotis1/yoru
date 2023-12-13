import { User } from 'next-auth';
import { client } from '@/scripts/connection';

import { z } from 'zod';

import { MongoDBUserSchema } from '@/app/schema';

const userSchema = MongoDBUserSchema.extend({
    email: z.string().nullish(),
}).omit({ _id: true, is_friend: true });

function createUserNameWithTag(
    countUsersWithTheSameName: number,
    name: string,
) {
    const userTag = `#${(countUsersWithTheSameName + 1)
        .toString()
        .padStart(4, '0')}`;
    const username = `${name}${userTag}`;

    return username;
}

function createUserData(username: string, name: string, email: string, image: string) {

    const user: z.infer<typeof userSchema> = {
        name: username,
        nickname: name,
        joined: new Date(),
        level: 0,
        images: {
            avatar: image,
            banner: null,
        },
        about: '¡Hola, soy nuevo en la comunidad!',
        xp: 0,
        social: {
            twitter: null,
            instagram: null,
            facebook: null,
            discord: null,
            twitch: null,
            youtube: null,
        },
        stats: {
            anime: {
                watched: 0,
                days_watched: 0,
                average_score: 0,
            },
            manga: {
                read: 0,
                days_read: 0,
                average_score: 0,
            },
            gacha: {
                packs_opened: 0,
                claimed: 0,
            },
        },
        permissions: {
            is_admin: false,
            is_moderator: false,
            is_verified: false,
            is_premium: false,
            is_banned: false,
        },
        is_private: false,
        personalization: {
            theme: 'dark',
            primary_color: 'purple',
            language_to_show: 'romaji',
        },
        conexions: {
            crunchyroll: null,
            funimation: null,
            netflix: null,
            amazon: null,
            hulu: null,
            vrv: null,
            disney: null,
        },
        notifications: {
            newsletter: true,
            email: true,
            push: true,
        },
        nsfw: {
            show_on_profile: true,
            show: true,
        },
        privacy: {
            restrict_messages_to_friends: true,
        },
        inbox: {
            messages: [],
            notifications: [],
        },
        friends: [],
        favourites: {
            anime: [],
            manga: [],
            characters: [],
            staff: [],
            studios: [],
        },
        achievements: [],
        collection: [],
        wishlist: [],
        coins: 100,
        last_claimed: null,
        servers: [],
        email: email,
        country: 'ES',
    };

    return user;
}

export default async function createUser(message: { user: User }) {
    let { name, email, image } = message.user;

    if (!name || !email || !image)
        throw new Error('Falta alguno de los campos requeridos');

    const authDb = (await client).db("auth");
    const userAuthColl = authDb.collection('users');

    const countUsersWithTheSameName = await userAuthColl.countDocuments({ name });

    const username = createUserNameWithTag(countUsersWithTheSameName, name);
    const user = createUserData(username, name, email, image);

    const userToInsert = userSchema.parse(user);

    await authDb
        .collection('users')
        .findOneAndUpdate(
            { email: email },
            { $set: userToInsert },
            { upsert: true },
        );
}
