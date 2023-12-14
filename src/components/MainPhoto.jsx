import { cn } from '@/utils/cn'
import React from 'react'

export default function MainPhoto({ className }) {
   return (
      <div className={cn(className)}>
         <div className="bg-me h-full bg-cover bg-top bg-no-repeat mix-blend-luminosity " />
      </div>
   )
}
