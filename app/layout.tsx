import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./navbar/page";
import { ThemeProvider } from "@/components/theme-provider"
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OSIS SMK Xaverius Palembang',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <Head>
        <link rel="shortcut icon" href="../public/logo.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
