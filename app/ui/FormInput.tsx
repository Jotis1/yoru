"use client";

import { useState } from "react";

export default function FormInput({
    onChange,
    label,
    required,
    placeholder,
    type,
    name,
    handleBlur,
    handleFocus,
}: {
    handleBlur?: () => any;
    handleFocus?: () => any;
    onChange?: (e: any) => any;
    required?: boolean;
    placeholder: string;
    type: 'password' | 'email';
    label?: string;
    name?: string
}) {
    const [isPassword, setIsPassword] = useState(true);

    const handleInputType = () => {
        setIsPassword(!isPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Llamar a la función onChange pasando el valor al componente padre
        if (onChange) {
            onChange(e);
        }
    };

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        // Manejar el evento onInput y llamar a handleChange
        handleChange(e as React.ChangeEvent<HTMLInputElement>);
    };

    return (
        <section className="flex w-full flex-col gap-2.5">
            <p className="font-medium text-zinc-400">{label}</p>
            <section className="flex w-full items-center rounded-lg bg-zinc-50 overflow-hidden">
                <input
                    autoComplete="off"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onInput={handleInput}
                    required={required}
                    name={name || type}
                    type={type === "password" ? (isPassword ? "password" : "text") : type}
                    placeholder={placeholder}
                    className="h-10 flex-grow bg-zinc-50 bg-transparent px-2.5 font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-none"
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={handleInputType}
                        className="h-full flex justify-center items-center min-w-[40px]"
                    >
                        {isPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        ) : (
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
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        )}
                    </button>
                )}
            </section>
        </section>
    );
}
