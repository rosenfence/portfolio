import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <Link href='/'>MAIN</Link>
      <Link href='/projects'>PROJECTS</Link>
      <Link href='/about'>ABOUT ME</Link>
      <Link href='/contact'>CONTACT</Link>
    </>
  );
}
