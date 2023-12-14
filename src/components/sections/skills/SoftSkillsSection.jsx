import React, { forwardRef } from 'react'
import SectionWrapper from '../SectionWrapper'

import {
   BrainIcon,
   CompassRulerIcon,
   DiplomaIcon,
   IdeaIcon,
   MiningIcon,
   SpeedIcon,
   TeamIcon,
   VolumeIcon,
   WorkerIcon,
} from './icons/softSkills'
import SkillGrid from './SkillGrid'
import SectionContent from '../SectionContent'
export default function SoftSkillsSection(props) {
   const skillList = [
      { name: 'Disciplinado', Icon: WorkerIcon },
      { name: 'Minucioso', Icon: CompassRulerIcon },
      { name: 'Resolutivo', Icon: IdeaIcon },
      { name: 'Cooperativo', Icon: TeamIcon },
      { name: 'Analítico', Icon: BrainIcon },

      { name: 'Diploma', Icon: DiplomaIcon },
      { name: 'Aprendo rápido', Icon: SpeedIcon },
      { name: 'Persistente', Icon: MiningIcon },

      { name: 'Comunicativo', Icon: VolumeIcon },
   ]
   // console.log('ref', ref)
   const iconProps = { viewBox: '0 0 1000 1000' }
   return (
      <SectionWrapper {...props}>
         <SectionContent title={'Soft Skills'}>
            <SkillGrid skillList={skillList} iconProps={iconProps} />
         </SectionContent>
      </SectionWrapper>
   )
}
