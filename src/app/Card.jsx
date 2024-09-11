'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Globe } from 'lucide-react'
import Modal from './Modal'
export default function Card({ src, href, title, description }) {
   const [open, setOpen] = useState(false)
   const toogleOpen = () => {
      setOpen(!open)
   }

   return (
      <div className="rounded-xl  shadow-2xl">
         <Modal open={open} setOpen={setOpen} src={src} />

         <div
            className=" flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg focus:shadow-lg focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70"
            href="#"
         >
            <div></div>
            <button
               className="relative overflow-hidden rounded-t-xl   pt-[50%] "
               onClick={() => setOpen(true)}
            >
               <img
                  className="size-full w-ful absolute start-0 top-0 rounded-t-[2rem] object-cover p-4  transition-transform duration-500 ease-in-out hover:scale-105 focus:scale-105 md:p-5"
                  src={src}
                  alt="Card Image"
               />
            </button>
            <div className="p-4 md:p-5">
               <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {title}
               </h3>
               <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  {description}
               </p>
            </div>
            <Link href={href} target="_blank" className="p-4 md:p-5 md:pt-1">
               <Globe size={24} />
            </Link>
         </div>
      </div>
   )
}
//bg-gradient-to-t from-black from-50% to-50%
// <div className="h- overflow- absolute left-0 top-0 w-screen bg-slate-600"></div>
