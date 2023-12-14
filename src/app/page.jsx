import AppBar from '@/components/AppBar'
import BottomBar from '@/components/BottomBar'
import MainPhoto from '@/components/MainPhoto'
import SideBar from '@/components/SideBar'
import SectionContainer from '@/components/sections/SectionContainer'
import SectionContainerForward from '@/components/sections/SectionContainerForward'
import clsx from 'clsx'

export default function Home() {
   return (
      <div className="h-screen snap-y snap-mandatory overflow-y-auto">
         <AppBar />
         <MainPhoto
            className={clsx(
               'lg:w-[calc(50%-var(--sideBar-width)/2)]',
               '2xl:w-[calc(45%-var(--sideBar-width)/2)]'
            )}
         />
         <SectionContainer
            className={clsx(
               'lg:w-[calc(50%-var(--sideBar-width)/2)]',
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
