import React, { forwardRef } from 'react'
import SectionWrapperForward from '../SectionWrapperForward'

const SoftSkillsSectionForward = forwardRef(
   function SoftSkillsSectionForward(props, ref) {
      return (
         <SectionWrapperForward ref={ref} {...props}>
            {' '}
            SoftSkills
         </SectionWrapperForward>
      )
   }
)
export default SoftSkillsSectionForward
