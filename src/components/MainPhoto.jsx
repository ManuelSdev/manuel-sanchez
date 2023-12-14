import { cn } from '@/utils/cn'
import React from 'react'

export default function MainPhoto({ className }) {
   return (
      <div
         className={cn(
            'hidden bg-bronze lg:fixed  lg:left-0 lg:top-fatTopAppBar lg:block lg:h-full ',
            className
         )}
      >
         <div className="h-full bg-me bg-cover bg-top bg-no-repeat mix-blend-luminosity " />
      </div>
   )
}
