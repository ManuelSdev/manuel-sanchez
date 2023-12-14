import { cn } from '@/utils/cn'
import React from 'react'

export const SectionContent = ({ className, ...props }) => {
   return (
      <div className={cn('py-12 text-white lg:px-[8%] lg:py-20')} {...props} />
   )
}
