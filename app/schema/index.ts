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
  avatar: z.string().url().nullish(),
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
  joined: z.date(),
  level: z.number().int().min(0).max(100),
  images: z.object({
    avatar: z.string().url().nullish(),
    banner: z.string().url().nullish(),
  }),
  about: z.string().max(250),
  xp: z.number().int().min(0),
  social: z.object({
    twitter: z.string().url().nullish(),
    instagram: z.string().url().nullish(),
    facebook: z.string().url().nullish(),
    discord: z.string().url().nullish(),
    twitch: z.string().url().nullish(),
    youtube: z.string().url().nullish(),
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
    crunchyroll: z.string().url().nullish(),
    funimation: z.string().url().nullish(),
    netflix: z.string().url().nullish(),
    amazon: z.string().url().nullish(),
    hulu: z.string().url().nullish(),
    vrv: z.string().url().nullish(),
    disney: z.string().url().nullish(),
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
  last_claimed: z.date().nullish(),
  servers: z.array(z.string().uuid()),
  email: EmailSchema,
  country: CountrySchema,
});
