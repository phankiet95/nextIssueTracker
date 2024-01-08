import { Theme, ThemePanel } from '@radix-ui/themes';
import './theme-config.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import '@radix-ui/themes/styles.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
 });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
          <Navbar />
          <main className='p-5'>{children}</main>
          <ThemePanel />
        </Theme>
        </body>
    </html>
  )
}
