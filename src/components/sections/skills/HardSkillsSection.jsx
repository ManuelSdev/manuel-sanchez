import React, { forwardRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import Image from 'next/image'
import { SectionHeader, SectionContent, SectionBlock } from '@/modules/section'

import {
   CssIcon,
   HtmlIcon,
   MaterialIcon,
   MongoIcon,
   NodeIcon,
   ReactIcon,
   ReduxIcon,
   TailwindIcon,
   ExpressIcon,
   NextJsIcon,
   GitIcon,
} from './icons/hardSkills'
import SkillGrid from './SkillGrid'

export default function HardSkillsSection({ id, ...props }) {
   const skillList = [
      { name: 'React', Icon: ReactIcon },
      { name: 'MongoDB', Icon: MongoIcon },
      { name: 'HTML', Icon: HtmlIcon },
      { name: 'CSS', Icon: CssIcon },
      { name: 'MaterialUI', Icon: MaterialIcon },
      { name: 'Tailwind', Icon: TailwindIcon },
      { name: 'Redux', Icon: ReduxIcon },
      { name: 'NextJS', Icon: NextJsIcon },
      { name: 'NodeJS', Icon: NodeIcon },
      { name: 'ExpressJS', Icon: ExpressIcon },
      { name: 'Git', Icon: GitIcon },
   ]

   //const a = skills.map((skill, index) => renderIcon(skill.icon))
   return (
      <div className="relative">
         <div id={id} className="absolute -top-fatTopAppBar left-0" />
         <SectionBlock {...props}>
            <SectionContent>
               <SectionHeader>Hard Skills</SectionHeader>
               <SkillGrid skillList={skillList} />
            </SectionContent>
         </SectionBlock>
      </div>
   )
}
//    {skills.map((skill, index) => renderIcon(skill.icon))}
