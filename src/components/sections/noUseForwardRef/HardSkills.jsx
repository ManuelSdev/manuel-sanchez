import React, { forwardRef } from 'react'
import SectionWrapper from './SectionWrapper'

const HardSkills = forwardRef(function HardSkills(props, ref) {
   return (
      <SectionWrapper ref={ref} {...props}>
         {' '}
         HardSkills
      </SectionWrapper>
   )
})
export default HardSkills
