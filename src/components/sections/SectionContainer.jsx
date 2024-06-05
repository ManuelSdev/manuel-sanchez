import React from 'react'

import clsx from 'clsx'
import { cn } from '@/utils/cn'
import PhotoSection from './PhotoSection'
import HardSkillsSection from './skills/HardSkillsSection'
import SoftSkillsSection from './skills/SoftSkillsSection'
import NameSection from './name/NameSection'
import ProyectsSection from './ProyectsSection'
import NameSectionMobile from './name/NameSectionMobile'
import Dots from '../Dots'
import SideBar from '../SideBar'

export default function SectionContainer({ className }) {
   console.log('SectionContainer')
   return (
      <div
         id="SectionContainer"
         className={cn(
            'absolute w-full lg:right-sideBarWidth lg:top-fatTopAppBar',
            //    'min-h-screen ',
            // 'top-slimTopAppBar lg:top-fatTopAppBar  ',
            //  ' h-slimBarScreen lg:h-fatBarScreen',

            //'overflow-y-clip',
            //' snap-y snap-mandatory overflow-y-auto ',
            className
         )}
      >
         <NameSection
            id="home"
            className={
               'hidden  h-slimBarScreen bg-blue-700 lg:block lg:h-fatBarScreen'
            }
         />
         <NameSectionMobile className={'block bg-blue-400 lg:hidden'} />
         <PhotoSection id="photo" className={'bg-green-200 lg:hidden'} />
         <HardSkillsSection id="hard" className={'bg-violet-200'} />
         <SoftSkillsSection id="soft" className={'bg-amber-200'} />
         <ProyectsSection id="proyects" className={'bg-red-200'} />
      </div>
   )
}
