import { PageTransitionAnimation, HomeLayoutAnimation } from '../ui/animations';
import { PageNavigation, Topbar } from '@/app/ui/navigation';
import { LevelProgress } from '@/app/ui/progress';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`flex h-screen w-screen flex-col`}>
      <Topbar />
      <LevelProgress level={50} />
      <PageNavigation>
        <section className='flex-grow'>
          <PageTransitionAnimation>{children}</PageTransitionAnimation>
        </section>
      </PageNavigation>
      <section className='absolute left-0 top-0 -z-[1] h-screen w-screen overflow-hidden'>
        <HomeLayoutAnimation />
      </section>
    </main>
  );
}
