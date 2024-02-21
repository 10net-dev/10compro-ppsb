import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sinergi Banjaratma',
  description: 'Rest Area KM 260B - UMKM Hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./../public/assets/favicon.ico" />
      </head>
      <body className="theme-red">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
