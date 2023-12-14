import React, { forwardRef } from 'react'
import SectionWrapper from '../SectionWrapper'
import Image from 'next/image'
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
import SectionContent from '../SectionContent'
import SkillGrid from './SkillGrid'

export default function HardSkillsSection(props) {
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
      <SectionWrapper {...props}>
         <SectionContent title={'Hard Skills'}>
            <SkillGrid skillList={skillList} />
         </SectionContent>
      </SectionWrapper>
   )
}
//    {skills.map((skill, index) => renderIcon(skill.icon))}
