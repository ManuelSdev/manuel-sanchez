import { Inter } from 'next/font/google'
import './globals.css'
import Shell from './Shell'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
   console.log('first')
   return (
      <html className="" lang="en">
         <body className={inter.className}>
            <div className="h-screen ">
               <div className="flex h-screen items-center bg-black">
                  <div className="m-auto  h-96 w-96 bg-red-200">{children}</div>
               </div>
            </div>
         </body>
      </html>
   )
}