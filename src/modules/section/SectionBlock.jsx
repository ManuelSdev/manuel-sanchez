import { cn } from '@/utils/cn'
import React from 'react'

export const SectionBlock = ({ className, ...props }) => {
   console.log('SectionBlock')
   console.log(className)
   return (
      <div
         className={cn(
            'pt-slimTopAppBar ',
            //   'h-slimBarScreen w-full',
            // 'lg:h-fatBarScreen',
            //'min-h-screen ',
            'snap-center',
            className
         )}
         {...props}
      />
   )
}
