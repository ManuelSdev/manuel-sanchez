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

export default function SectionContainer({ className }) {
   return (
      <div
         id="SectionContainer"
         className={cn(
            'absolute w-full lg:right-sideBarWidth',
            'top-slimTopAppBar lg:top-fatTopAppBar  ',
            ' h-slimBarScreen lg:h-fatBarScreen',
            //'overflow-y-clip',
            // ' snap-y snap-mandatory overflow-y-auto ',
            className
         )}
      >
         <NameSection className={'hidden bg-blue-700 lg:block'} />
         <NameSectionMobile className={'block bg-blue-400 lg:hidden'} />
         <PhotoSection className={'bg-green-200 lg:hidden'} />
         <HardSkillsSection className={'bg-violet-200'} />
         <SoftSkillsSection className={'bg-amber-200'} />
         <ProyectsSection className={'bg-red-200'} />
      </div>
   )
}
