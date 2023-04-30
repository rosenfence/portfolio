'use client';
import Link from 'next/link';

export default function LinkList({ styles, onClick }) {
  return (
    <section className={`${styles} flex-col w-[300px] flex-center bg-theme h-screen`}>
      <Link className='m-8 hover:font-bold' href='/' onClick={onClick}>
        MAIN
      </Link>
      <Link className='m-8 hover:font-bold' href='/projects' onClick={onClick}>
        PROJECTS
      </Link>
      <Link className='m-8 hover:font-bold' href='/about' onClick={onClick}>
        ABOUT ME
      </Link>
      <Link className='m-8 hover:font-bold' href='/contact' onClick={onClick}>
        CONTACT
      </Link>
    </section>
  );
}
