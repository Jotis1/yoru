'use client';
import Button from '../../../components/Button';

export default function ChangeNameForm({
  onChange,
}: {
  onChange: (e: any) => any;
}) {
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
      <section className='px-10'>
        <input
          onPointerDownCapture={(e) => e.stopPropagation()}
          autoComplete='off'
          onChange={handleChange}
          onInput={handleInput}
          type='text'
          className='h-10 w-full border-b-2 border-indigo-300 bg-transparent px-2.5 text-center text-zinc-50 outline-none'
        />
      </section>
      <section className='flex w-full justify-center text-center'>
        <Button submit text='Continuar'></Button>
      </section>
    </>
  );
}
