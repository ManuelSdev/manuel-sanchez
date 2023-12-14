import React, { forwardRef } from 'react'
import SectionWrapperForward from '../SectionWrapperForward'

const HardSkillsSectionForward = forwardRef(
   function HardSkillsSectionForward(props, ref) {
      return (
         <SectionWrapperForward ref={ref} {...props}>
            {' '}
            HardSkills
         </SectionWrapperForward>
      )
   }
)
export default HardSkillsSectionForward
