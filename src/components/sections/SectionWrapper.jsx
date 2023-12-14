'use client'
import { cn } from '@/utils/cn'
import clsx from 'clsx'
import React from 'react'
export default function SectionWrapper({
   className,
   first,
   ref,
   children,

   ...props
}) {
   return (
      <div
         ref={ref}
         className={cn(
            'py-12 text-white  lg:max-w-4xl lg:px-[8%] lg:py-20',
            'h-slimBarScreen w-full',
            'lg:h-fatBarScreen',
            'snap-center',
            className,
            first
         )}
         {...props}
      >
         {children}
      </div>
   )
}
