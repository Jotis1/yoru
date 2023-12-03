import Link from 'next/link';

export default function LinkComponent({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className='text-xs text-indigo-300 md:text-base' href={href}>
      {children}
    </Link>
  );
}
