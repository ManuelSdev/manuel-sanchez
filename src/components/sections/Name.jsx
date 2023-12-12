import React, { forwardRef } from 'react'
import SectionWrapper from './SectionWrapper'

const Name = forwardRef(function Name(props, ref) {
   // console.log('ref', ref)
   return (
      <SectionWrapper ref={ref} {...props}>
         {' '}
         Name
      </SectionWrapper>
   )
})
export default Name
