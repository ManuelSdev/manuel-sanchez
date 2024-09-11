'use client'

import { useState } from 'react'
import {
   Dialog,
   DialogBackdrop,
   DialogPanel,
   DialogTitle,
} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function Modal({ open, setOpen, src }) {
   //const [open, setOpen] = useState(true)
   console.log(src)
   return (
      <Dialog open={open} onClose={setOpen} className="relative z-10">
         <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
         />

         <div className="fixed inset-0  z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
               <DialogPanel
                  transition
                  className="relative transform overflow-hidden  bg-white text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-[90%] sm:p-0 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
               >
                  <div>
                     <img
                        className="size-full  start-0 w-full  object-cover  transition-transform duration-500 ease-in-out "
                        src={src}
                        alt="Card Image"
                     />
                  </div>
               </DialogPanel>
            </div>
         </div>
      </Dialog>
   )
}
/*
<div className="h-full">
                     <img
                        className="size-full absolute start-0 top-0 w-full rounded-t-[2rem] object-cover p-4  transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 md:p-5"
                        src="/images/conil-s.png"
                        alt="Card Image"
                     />
                  </div>

                  */
