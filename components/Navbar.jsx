import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='md:flex hidden flex-col w-[300px] flex-center bg-gradient-to-r from-theme to-theme-background'>
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
  );
}
