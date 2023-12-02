import Link from 'next/link';

import PlanetsAnimation from './PlanetsAnimation';

export default function AuthForm({
  children,
  headerText,
  animate,
  returnHref,
  onClick,
}: {
  children: React.ReactNode;
  headerText: string;
  animate: boolean;
  returnHref: string;
  onClick?: () => any;
}) {
  return (
    <section
      className="relative flex md:w-500 w-full flex-col items-center gap-20 rounded-lg bg-zinc-900 sm:px-10 pt-20 sm:pb-20 px-5 pb-5 "
    >
      <p className="text-2xl font-bold uppercase text-zinc-50">{headerText}</p>
      <PlanetsAnimation showEclipse={animate} />
      {children}
      <section className="text-center">
        <button
          type="submit"
          onClick={onClick}
          className="flex h-10 items-center rounded-lg border-2 border-zinc-50 px-5 text-zinc-50"
        >
          Continuar
        </button>
      </section>
      <Link
        href={returnHref}
        className="absolute left-5 top-5 flex items-center justify-center text-zinc-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </Link>
    </section>
  );
}
