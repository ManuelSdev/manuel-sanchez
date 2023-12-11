import React from 'react'
import Photo from './sections/Photo'
import Name from './sections/Name'
import HardSkills from './sections/HardSkills'
import SoftSkills from './sections/SoftSkills'
import clsx from 'clsx'

export default function SectionContainer() {
   return (
      <div
         className={clsx(
            'mt-slimTopAppBar md:mt-fatTopAppBar',
            'snap-y snap-mandatory overflow-auto md:h-fatBarScreen'
         )}
      >
         <Name className={'bg-blue-400'} />
         <Photo className={'bg-green-200'} />
         <HardSkills className={'bg-violet-200'} />
         <SoftSkills className={'bg-amber-200'} />
      </div>
   )
}
