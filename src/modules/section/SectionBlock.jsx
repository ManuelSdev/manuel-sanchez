import { cn } from '@/utils/cn'
import React from 'react'

export const SectionBlock = ({ className, ...props }) => {
   return (
      <div
         className={cn(
            'SECTION-BLOCK',
            'h-slimBarScreen w-full',
            'lg:h-fatBarScreen',
            'snap-center',
            className
         )}
         {...props}
      />
   )
}
