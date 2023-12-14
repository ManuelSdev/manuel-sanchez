import { cn } from '@/utils/cn'
import React from 'react'

export const SectionHeader = ({ className, ...props }) => {
   return (
      <div
         className={cn(
            'pb-14 text-center font-serif text-6xl font-bold text-bronze xl:text-left ',
            className
         )}
         {...props}
      />
   )
}
