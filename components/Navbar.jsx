'use client';
import { useState } from 'react';
import LinkList from './LinkList';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button className='flex h-6 md:hidden' onClick={handleClick}>
        ►
      </button>
      <LinkList styles={'hidden md:flex'} />
      <div className={`${open ? 'absolute inset-0 z-50 bg-modal-background' : 'hidden'} transition-all`} onClick={handleClick}>
        <div className={`relative md:hidden ${open ? 'flex' : 'hidden'} flex-col w-[300px] flex-center bg-theme`} onClick={(e) => e.stopPropagation()}>
          <button className={`${open ? 'flex' : 'hidden'} mr-5 md:hidden`} onClick={handleClick}>
            ◀︎
          </button>
          <LinkList />
        </div>
      </div>
    </>
  );
}
