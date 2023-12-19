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
   return (
      <div
         className={clsx(
            'HOME',
            // 'h-full min-h-screen',
            //  'relative ',
            'h-screen',
            'snap-y snap-mandatory overflow-y-auto'
            //   'pt-fatTopAppBar'
         )}
      >
         <div
            className={clsx(
               //'absolute w-full lg:right-sideBarWidth lg:top-fatTopAppBar',
               //  'pt-fatTopAppBar',
               'lg:ml-[calc(50%-var(--sideBar-width)/2)] 2xl:ml-[45%]',
               ' lg:w-[calc(50%-var(--sideBar-width)/2)]',
               '2xl:w-[55%]',
               'relative',
               'h-full'
            )}
         >
            <div className={clsx('absolute left-0  top-0 w-full')}>
               <div className="lg:w-[calc(100%-var(--sideBar-width))]">
                  <div
                     className={cn(
                        'bg-red-400',
                        'SECTION-BLOCK',
                        'min-h-screen pt-slimTopAppBar ',
                        //   'h-slimBarScreen w-full',
                        // 'lg:h-fatBarScreen',
                        'snap-center'
                     )}
                  />
                  <div
                     className={cn(
                        'bg-blue-400',
                        'SECTION-BLOCK',
                        'min-h-screen pt-slimTopAppBar ',
                        //   'h-slimBarScreen w-full',
                        // 'lg:h-fatBarScreen',
                        'snap-center'
                     )}
                  />
                  <div
                     className={clsx(
                        'fixed left-[calc(100%-var(--sideBar-width))] top-0 h-full w-[var(--sideBar-width)] bg-black'
                     )}
                  ></div>
               </div>
            </div>
         </div>
      </div>
   )
}
/*




            <div
         className={clsx(
            // 'h-full min-h-screen',
            'h-full'
            'snap-y snap-mandatory overflow-y-auto'
         )}
      >
         <AppBar />
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
         */
