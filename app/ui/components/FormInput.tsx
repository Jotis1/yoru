'use client';

import { useState } from 'react';

import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';

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
  name?: string;
}) {
  const [isPassword, setIsPassword] = useState(true);

  const handleInputType = () => {
    setIsPassword(!isPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    handleChange(e as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <section className='flex w-full flex-col gap-2.5'>
      <p className='select-none font-medium text-zinc-400'>{label}</p>
      <section className='flex w-full items-center overflow-hidden rounded-lg bg-zinc-50'>
        <input
          onPointerDownCapture={(e) => e.stopPropagation()}
          autoComplete='off'
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onInput={handleInput}
          required={required}
          name={name || type}
          type={type === 'password' ? (isPassword ? 'password' : 'text') : type}
          placeholder={placeholder}
          className='h-10 flex-grow bg-transparent bg-zinc-50 px-2.5 font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-none'
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
