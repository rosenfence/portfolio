'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className={`md:flex ${open ? 'flex' : 'hidden'} flex-col w-[300px] flex-center bg-gradient-to-r from-theme to-theme-background`}>
        <button className='flex md:hidden' onClick={handleClick}>
          ◀︎
        </button>
        <Link className='m-8 text-white hover:font-bold' href='/'>
          MAIN
        </Link>
        <Link className='m-8 text-white hover:font-bold' href='/projects'>
          PROJECTS
        </Link>
        <Link className='m-8 text-white hover:font-bold' href='/about'>
          ABOUT ME
        </Link>
        <Link className='m-8 text-white hover:font-bold' href='/contact'>
          CONTACT
        </Link>
      </div>
      <button className={`${open ? 'hidden' : 'flex'} mr-5 md:hidden`} onClick={handleClick}>
        ►
      </button>
    </>
  );
}
