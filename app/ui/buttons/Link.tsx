import NextLink from 'next/link';

export default function Link({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <NextLink href={href}>
            <p className='text-xs text-indigo-300 md:text-base'>{children}</p>
        </NextLink>
    );
}
