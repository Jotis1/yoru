import { z } from 'zod';

export const countries = [
  'ES',
  'FR',
  'IT',
  'DE',
  'UK',
  'US',
  'CA',
  'JP',
  'CN',
  'AU',
] as const;
export const CountrySchema = z.enum(countries);

export const themes = ['light', 'dark'] as const;
export const ThemeSchema = z.enum(themes);

export const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'gray',
] as const;
export const ColorSchema = z.enum(colors);

export const languagesToShow = ['native', 'romaji', 'english'] as const;
export const LanguageToShowSchema = z.enum(languagesToShow);

export const PasswordSchema = z
  .string()
  .min(8)
  .max(32)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

export const EmailSchema = z.string().email();
export type EmailProps = z.infer<typeof EmailSchema>;

export const UserSchema = z.object({
  createdAt: z.string().datetime(),
  username: z.string(),
  avatar: z.string().url(),
  password: z.string(),
  email: EmailSchema,
  id: z.string(),
  uuid: z.string().uuid(),
});

export type UserProps = z.infer<typeof UserSchema>;

export const MongoDBUserSchema = z.object({
  _id: z.string().uuid(),
  name: z.string().min(3),
  nickname: z.string().min(1).max(25),
  joined: z.string().datetime(),
  level: z.number().int().min(1).max(100),
  images: z.object({
    avatar: z.string().url(),
    banner: z.string().url(),
  }),
  about: z.string().max(250),
  xp: z.number().int().min(0),
  social: z.object({
    twitter: z.string().url(),
    instagram: z.string().url(),
    facebook: z.string().url(),
    discord: z.string().url(),
    twitch: z.string().url(),
    youtube: z.string().url(),
  }),
  stats: z.object({
    anime: z.object({
      watched: z.number().int().min(0),
      days_watched: z.number().int().min(0),
      average_score: z.number().int().min(0).max(10),
    }),
    manga: z.object({
      read: z.number().int().min(0),
      days_read: z.number().int().min(0),
      average_score: z.number().int().min(0).max(10),
    }),
    gacha: z.object({
      packs_opened: z.number().int().min(0),
      claimed: z.number().int().min(0),
    }),
  }),
  permissions: z.object({
    is_admin: z.boolean(),
    is_moderator: z.boolean(),
    is_verified: z.boolean(),
    is_premium: z.boolean(),
    is_banned: z.boolean(),
  }),
  is_private: z.boolean(),
  is_friend: z.boolean(),
  personalization: z.object({
    theme: ThemeSchema,
    primary_color: ColorSchema,
    language_to_show: LanguageToShowSchema,
  }),
  conexions: z.object({
    crunchyroll: z.string().url(),
    funimation: z.string().url(),
    netflix: z.string().url(),
    amazon: z.string().url(),
    hulu: z.string().url(),
    vrv: z.string().url(),
    disney: z.string().url(),
  }),
  notifications: z.object({
    newsletter: z.boolean(),
    email: z.boolean(),
    push: z.boolean(),
  }),
  nsfw: z.object({
    show_on_profile: z.boolean(),
    show: z.boolean(),
  }),
  privacy: z.object({
    restrict_messages_to_friends: z.boolean(),
  }),
  inbox: z.object({
    messages: z.array(z.string().uuid()),
    notifications: z.array(z.string().uuid()),
  }),
  friends: z.array(z.string().uuid()),
  favourites: z.object({
    anime: z.array(z.string().uuid()),
    manga: z.array(z.string().uuid()),
    characters: z.array(z.string().uuid()),
    staff: z.array(z.string().uuid()),
    studios: z.array(z.string().uuid()),
  }),
  achievements: z.array(z.string().uuid()),
  collection: z.array(z.string().uuid()),
  wishlist: z.array(z.string().uuid()),
  coins: z.number().int().min(0),
  last_claimed: z.string().datetime(),
  servers: z.array(z.string().uuid()),
  email: EmailSchema,
  country: CountrySchema,
});

const user: z.infer<typeof MongoDBUserSchema> = {
  _id: '123456789',
  name: 'John Doe',
  nickname: 'johndoe',
  joined: '2022-01-01T00:00:00Z',
  level: 50,
  images: {
    avatar: 'https://example.com/avatar.jpg',
    banner: 'https://example.com/banner.jpg',
  },
  about: 'I am a software developer',
  xp: 1000,
  social: {
    twitter: 'https://twitter.com/johndoe',
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    discord: 'https://discord.gg/johndoe',
    twitch: 'https://twitch.tv/johndoe',
    youtube: 'https://youtube.com/johndoe',
  },
  stats: {
    anime: {
      watched: 100,
      days_watched: 10,
      average_score: 8,
    },
    manga: {
      read: 50,
      days_read: 5,
      average_score: 7,
    },
    gacha: {
      packs_opened: 20,
      claimed: 10,
    },
  },
  permissions: {
    is_admin: false,
    is_moderator: true,
    is_verified: true,
    is_premium: false,
    is_banned: false,
  },
  is_private: false,
  is_friend: true,
  personalization: {
    theme: 'dark',
    primary_color: 'purple',
    language_to_show: 'english',
  },
  conexions: {
    crunchyroll: 'https://crunchyroll.com/johndoe',
    funimation: 'https://funimation.com/johndoe',
    netflix: 'https://netflix.com/johndoe',
    amazon: 'https://amazon.com/johndoe',
    hulu: 'https://hulu.com/johndoe',
    vrv: 'https://vrv.com/johndoe',
    disney: 'https://disney.com/johndoe',
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
    messages: ['message1', 'message2'],
    notifications: ['notification1', 'notification2'],
  },
  friends: ['friend1', 'friend2'],
  favourites: {
    anime: ['anime1', 'anime2'],
    manga: ['manga1', 'manga2'],
    characters: ['character1', 'character2'],
    staff: ['staff1', 'staff2'],
    studios: ['studio1', 'studio2'],
  },
  achievements: ['achievement1', 'achievement2'],
  collection: ['item1', 'item2'],
  wishlist: ['item3', 'item4'],
  coins: 100,
  last_claimed: '2022-01-01T12:00:00Z',
  servers: ['server1', 'server2'],
  email: 'johndoe@example.com',
  country: 'ES',
};

MongoDBUserSchema.parse(user);

function makeSchemaOptional<T extends z.ZodTypeAny>(schema: T) {
  const res = schema.safeParse(user);
}
