import AppBar from '@/components/AppBar'
import BottomBar from '@/components/BottomBar'
import MainPhoto from '@/components/MainPhoto'
import SideBar from '@/components/SideBar'
import Header from '@/components/header/Header'
import SectionContainer from '@/components/sections/SectionContainer'
import SectionContainerForward from '@/components/sections/SectionContainerForward'
import TestContainerInter from '@/components/sections/TestContainerInter'
import { cn } from '@/utils/cn'
import clsx from 'clsx'
export default function Home() {
   console.log('first')
   return (
      <div
         className={clsx(
            // 'h-full min-h-screen',
            'h-full',
            'snap-y snap-mandatory overflow-y-auto'
         )}
      >
         <Header />
         HOLA
      </div>
   )
}
/*

   <div
         className={clsx(
            // 'h-full min-h-screen',
            'h-full',
            'snap-y snap-mandatory overflow-y-auto'
         )}
      >
         <Header />
         HOLA
      </div>


         */
