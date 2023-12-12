import React, { forwardRef } from 'react'
import SectionWrapper from './SectionWrapper'

const SoftSkills = forwardRef(function SoftSkills(props, ref) {
   return (
      <SectionWrapper ref={ref} {...props}>
         {' '}
         SoftSkills
      </SectionWrapper>
   )
})
export default SoftSkills
