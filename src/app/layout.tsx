import './globals.css'
import { DM_Sans } from 'next/font/google'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const dm_sans = DM_Sans({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Portfólio - Matheus Freitas',
  description: 'Portfólio profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${dm_sans.className} bg-dark-1 text-neutral-50`}>
        <ToastContainer position='top-center' theme='dark'/>
        {children}
      </body>
    </html>
  )
}
