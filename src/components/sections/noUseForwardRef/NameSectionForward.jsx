import React, { forwardRef } from 'react'
import SectionWrapperForward from '../SectionWrapperForward'
import clsx from 'clsx'

const NameSectionForward = forwardRef(function NameSectionForward(props, ref) {
   // console.log('ref', ref)
   return (
      <SectionWrapperForward ref={ref} {...props}>
         <div
            className={clsx(
               // 'hidden lg:block',
               '-ml-20 mt-24  rounded-l-full bg-black py-11 pl-11 font-serif text-3xl font-semibold   text-bronze ',
               'min-[500px]:-ml-24 min-[500px]:text-4xl min-[700px]:text-5xl lg:-ml-24 lg:p-20  lg:text-6xl xl:-ml-40 xl:text-8xl 2xl:-ml-48 min-[1660px]:p-28'
            )}
         >
            <div className=" hidden sm:block">
               <div>Manuel</div>
               <div>Sánchez Manzanares</div>
               <div></div>
            </div>
            <div className=" min-[360px]:my-8 min-[500px]:my-11 sm:hidden">
               MS
            </div>
         </div>
      </SectionWrapperForward>
   )
})
export default NameSectionForward
