import { Ubuntu, Ubuntu_Mono } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ubuntuMono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export { ubuntu, ubuntuMono };
