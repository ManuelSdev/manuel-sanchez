'use client'
import { cn } from '@/utils/cn'
import clsx from 'clsx'
import React from 'react'
export default function SectionWrapper({ className, first, ref, ...props }) {
   return (
      <div
         ref={ref}
         className={cn(
            ' h-slimBarScreen w-full snap-center transition-transform md:h-fatBarScreen',
            className,
            first
         )}
         {...props}
      />
   )
}
