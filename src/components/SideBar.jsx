import { cn } from '@/utils/cn'
import clsx from 'clsx'
import React from 'react'
import GithubIcon from './sections/skills/icons/sidebar/GithubIcon'
import MailIcon from './sections/skills/icons/sidebar/MailIcon'
import WhatsappIcon from './sections/skills/icons/sidebar/WhatsappIcon'
import LinkedInIcon from './sections/skills/icons/sidebar/LinkedInIcon'

export default function SideBar({ className }) {
   return (
      <div
         className={cn(
            'right-0 top-0 mt-fatTopAppBar hidden h-fatBarScreen w-[--sideBar-width] bg-black lg:fixed lg:block ',
            className
         )}
      >
         <nav className="flex h-full flex-col justify-end">
            <div className="r flex h-[30%] flex-wrap content-center justify-evenly lg:mb-8 lg:flex-col ">
               <GithubIcon className={'h-[50px] w-[50px] fill-bronze'} />
               <LinkedInIcon className={'h-[50px] w-[50px] fill-bronze'} />
               <MailIcon className={'h-[50px] w-[50px] fill-bronze'} />
               <WhatsappIcon className={'fill-bronze'} />
            </div>
         </nav>
      </div>
   )
}
