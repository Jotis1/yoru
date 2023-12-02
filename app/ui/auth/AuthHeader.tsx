import Link from 'next/link';

export default function AuthHeader() {
  return (
    <section
      className="flex h-full w-full flex-col items-center justify-center gap-24 text-zinc-50"
    >
      <header className="text-center drop-shadow-[0_0_10px_#E4E4E740]">
        <p className="lg:text-96 md:text-7xl sm:text-5xl text-3xl font-bold ">BIENVENIDO A YORU</p>
        <p className="lg:text-20 md:text-lg sm:text-md text-xs font-medium text-zinc-400">
          La red social diseñada por y para gamers
        </p>
      </header>
      <section className="text-center">
        <Link
          className="flex h-10 items-center rounded-lg border-2 border-zinc-50 px-5"
          href={`/signUp`}
        >
          Comenzar la aventura
        </Link>
      </section>
    </section>
  );
}
