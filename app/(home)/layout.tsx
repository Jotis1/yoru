import { PageComponents, Components, MotionComponents } from '../ui';

const { HomeNav, LeftNavigation, Background } = PageComponents.HomeComponents;
const { Nav, LevelBar } = Components;
const { TemplateAnimation } = MotionComponents;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex h-screen w-screen flex-col'>
      <Nav />
      <LevelBar level={50} />
      <section className='flex h-full w-full flex-grow items-center'>
        <HomeNav />
        <section className='flex-grow'>
          <TemplateAnimation>{children}</TemplateAnimation>
        </section>
        <LeftNavigation />
      </section>
      <section className='absolute left-0 top-0 -z-[1] h-screen w-screen overflow-hidden'>
        <Background />
      </section>
    </main>
  );
}
