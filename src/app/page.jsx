import AppBar from '@/components/AppBar'
import BottomBar from '@/components/BottomBar'
import MainPhoto from '@/components/MainPhoto'
import SideBar from '@/components/SideBar'
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
         <MainPhoto
            className={clsx(
               'lg:w-[calc(50%-var(--sideBar-width)/2)]',
               '2xl:w-[calc(45%-var(--sideBar-width)/2)]'
            )}
         />
         <SectionContainer
            className={clsx(
               //'lg:ml-[calc(50%-var(--sideBar-width)/2)] 2xl:ml-[calc(45%-var(--sideBar-width)/2)]',
               ' lg:w-[calc(50%-var(--sideBar-width)/2)]',
               '2xl:w-[calc(55%-var(--sideBar-width)/2)]'
            )}
         />

         <SideBar />
         <BottomBar />
      </div>
   )
}
/*




         */
