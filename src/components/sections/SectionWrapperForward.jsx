'use client'
import { cn } from '@/utils/cn'
import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { useInView } from 'react-intersection-observer'

const SectionWrapperForward = forwardRef(
   function SectionWrapperForward(props, ref) {
      const { className, mutationClass, id, refo, ...otherProps } = props
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
               'absolute h-slimBarScreen w-full transition-transform  duration-1000 md:h-fatBarScreen',
               className,
               mutationClass
            )}
            {...otherProps}
         />
      )
   }
)

export default SectionWrapperForward
