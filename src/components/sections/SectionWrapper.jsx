'use client'
import { cn } from '@/utils/cn'
import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { useInView } from 'react-intersection-observer'

const SectionWrapper = forwardRef(function SectionWrappers(props, ref) {
   const { className, first, id, refo, ...otherProps } = props
   // console.log('ref', ref)
   /*
   const {
      ref: refo,
      inView,
      entry,
   } = useInView({
     
      threshold: 1,
      onChange: (inView, entry) => {
         console.log('inView', ref.current)
      },
   })
*/
   const a = (element) => {
      //https://stackoverflow.com/questions/60270678/using-multiple-refs-on-a-single-react-element
      refo(element)
      ref.current = element
   }
   return (
      <div
         id={id}
         ref={ref}
         className={cn(
            'h-slimBarScreen w-full snap-start  md:h-fatBarScreen',
            className,
            first
         )}
         {...otherProps}
      />
   )
})

export default SectionWrapper
