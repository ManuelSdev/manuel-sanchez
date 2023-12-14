import React, { forwardRef } from 'react'
import clsx from 'clsx'
import SectionWrapper from '../SectionWrapper'

export default function NameSection(props) {
   // console.log('ref', ref)
   return (
      <SectionWrapper {...props}>
         <div
            className={clsx(
               // 'hidden lg:block',
               '-ml-20 mt-24  rounded-l-full bg-black py-11 pl-11 font-serif text-3xl font-semibold  text-bronze ',
               'min-[500px]:-ml-24 min-[500px]:text-4xl ',
               'min-[700px]:text-5xl',
               'lg:-ml-24 lg:p-20  lg:text-6xl',
               'xl:-ml-40 xl:text-8xl ',
               '2xl:-ml-48',
               'min-[1660px]:p-28'
            )}
         >
            <div>Manuel</div>
            <div>Sánchez Manzanares</div>
         </div>
      </SectionWrapper>
   )
}
