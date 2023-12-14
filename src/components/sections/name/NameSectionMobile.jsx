import React from 'react'
import SectionWrapper from '../SectionWrapper'
import clsx from 'clsx'
import Typing from '@/components/Typing'

export default function NameSectionMobile(props) {
   const typingStrings = [
      'FULL STACK WEB DEVELOPER',
      'WEB DESIGNER',
      'STUDYING DEVOPS & CLOUD <br> COMPUTING BOOTCAMP',
   ]

   return (
      <SectionWrapper {...props}>
         <div className="flex h-full items-center">
            <div
               className={clsx(
                  // 'block lg:hidden',
                  'w-full grow bg-black_2 px-6  pb-5 pt-11 font-serif font-semibold '
               )}
            >
               <div className="pb-10 text-5xl text-bronze ">
                  <div>Manuel</div>
                  <div>Sánchez</div>
                  <div>Manzanares</div>
               </div>
               <div className="text-white">
                  <Typing className="h-20" />
               </div>
            </div>
         </div>
      </SectionWrapper>
   )
}
