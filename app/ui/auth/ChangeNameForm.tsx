"use client";
import Button from "../Button"

export default function ChangeNameForm({ onChange }: { onChange: (e: any) => any }) {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
    };

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        handleChange(e as React.ChangeEvent<HTMLInputElement>);
    };

    return (
        <>
            <section className="px-10">
                <input
                    onPointerDownCapture={e => e.stopPropagation()}
                    autoComplete="off"
                    onChange={handleChange}
                    onInput={handleInput}
                    type="text" className="w-full h-10 px-2.5 text-zinc-50 border-b-2 border-indigo-300 bg-transparent outline-none text-center" />
            </section>
            <section className="text-center w-full flex justify-center">
                <Button submit text="Continuar"></Button>
            </section>
        </>
    )
}