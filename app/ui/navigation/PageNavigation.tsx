import LeftNav from './page_navigation/LeftNav';
import RightNav from './page_navigation/RightNav';

export default function PageNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex h-full w-full flex-grow items-center'>
      <LeftNav></LeftNav>
      {children}
      <RightNav></RightNav>
    </section>
  );
}
