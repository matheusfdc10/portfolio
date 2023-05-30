import './globals.css'
import { DM_Sans } from 'next/font/google'


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
        {children}
      </body>
    </html>
  )
}
