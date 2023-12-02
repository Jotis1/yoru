"use client";

import { useState } from "react";
import { ChangeName } from "../action";
import ChangeNameForm from "@/app/ui/auth/ChangeNameForm";

export default function Page() {

  const [name, setName] = useState<string>('');

  const handleChangeName = async () => {

    ChangeName({ name: name })
  }

  return (
    <form action={handleChangeName}>
      <section className="w-500 border-2 border-indigo-300 rounded-lg flex flex-col gap-10 px-5 py-5 bg-zinc-900">
        <header className="flex flex-col items-center gap-2.5 text-indigo-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
          <p>Bienvenido usuario, ¿cómo quieres que te llamemos?</p>
        </header>
        <ChangeNameForm onChange={(e) => setName(e.target.value)} />
      </section>
    </form>
  );
}