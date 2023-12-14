import AppBar from '@/components/AppBar'
import BottomBar from '@/components/BottomBar'
import MainPhoto from '@/components/MainPhoto'
import SideBar from '@/components/SideBar'
import SectionContainer from '@/components/sections/SectionContainer'

export default function Home() {
   return (
      <div className="h-screen snap-y snap-mandatory">
         <AppBar />
         <MainPhoto
            className={
               'hidden bg-bronze lg:fixed  lg:left-0 lg:top-fatTopAppBar lg:block lg:h-full lg:w-[calc(50%-var(--sideBar-width)/2)]'
            }
         />
         <SectionContainer
            className={
               'lg:absolute  lg:right-sideBarWidth lg:w-[calc(50%-var(--sideBar-width)/2)]'
            }
         />

         <SideBar />
         <BottomBar />
      </div>
   )
}
/*

         */
