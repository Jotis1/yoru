'use client';

import { useState } from 'react';

import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function AuthInput({
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
    name: string;
}) {
    const [isPassword, setIsPassword] = useState(true);

    const handleInputType = () => {
        setIsPassword(!isPassword);
    };

    return (
        <section className='flex w-full flex-col gap-2.5'>
            <label htmlFor={name} className='select-none font-medium text-zinc-400'>{label}</label>
            <section className='flex w-full items-center overflow-hidden rounded-lg bg-zinc-50'>
                <input
                    onPointerDownCapture={(e) => e.stopPropagation()}
                    autoComplete='off'
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={onChange}
                    onInput={onChange}
                    required={required}
                    name={name || type}
                    type={type === 'password' ? (isPassword ? 'password' : 'text') : type}
                    placeholder={placeholder}
                    className='h-10 flex-grow filter-none bg-zinc-50 px-2.5 text-zinc-950 placeholder:text-zinc-400 focus:outline-none'
                />
                {type === 'password' && (
                    <button
                        type='button'
                        onClick={handleInputType}
                        className='flex h-full min-w-[40px] items-center justify-center'
                    >
                        {isPassword ? (
                            <EyeIcon className='h-5 w-5' />
                        ) : (
                            <EyeSlashIcon className='h-5 w-5' />
                        )}
                    </button>
                )}
            </section>
        </section>
    );
}
