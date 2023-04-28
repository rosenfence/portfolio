'use client';
import Link from 'next/link';

export default function LinkList({ styles }) {
  return (
    <div className={`${styles} flex-col w-[300px] flex-center bg-theme h-screen`}>
      <Link className='m-8 hover:font-bold' href='/'>
        MAIN
      </Link>
      <Link className='m-8 hover:font-bold' href='/projects'>
        PROJECTS
      </Link>
      <Link className='m-8 hover:font-bold' href='/about'>
        ABOUT ME
      </Link>
      <Link className='m-8 hover:font-bold' href='/contact'>
        CONTACT
      </Link>
    </div>
  );
}
