import clsx from 'clsx'
import React from 'react'
export default function SectionWrapper({ className, ...props }) {
   return (
      <div
         className={clsx(
            'h-slimBarScreen w-full snap-center md:h-fatBarScreen',
            className
         )}
         {...props}
      />
   )
}
