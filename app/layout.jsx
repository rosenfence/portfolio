import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `Shin Chang Ha's Resume`,
  description: 'Resume created by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex w-screen max-w-[1200px] h-screen bg-theme'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
