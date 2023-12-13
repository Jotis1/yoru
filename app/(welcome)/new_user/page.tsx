"use client";

import { useEffect } from "react";

import { useSession } from "next-auth/react";

export default function Page() {

    const { data: session, status } = useSession();

    useEffect(() => {

        if (session === null) return;

        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: session }),
        })
    })

    return (
        <main>
            <header>Te damos la bienvenida</header>
        </main>
    )
}