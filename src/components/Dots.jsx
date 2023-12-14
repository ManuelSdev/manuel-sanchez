import { cn } from '@/utils/cn'
import React from 'react'

export default function Dots() {
   const sections = [1, 1, 1, 1, 1]
   return (
      <div className="absolute left-0 top-0 h-full w-full ">
         <div className="flex h-full w-full items-center justify-end pr-5">
            <div className="fixed">
               <div>
                  {sections.map((section, index) => (
                     <div
                        className={cn('my-6 h-4 w-4 rounded-full bg-bronze')}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}
