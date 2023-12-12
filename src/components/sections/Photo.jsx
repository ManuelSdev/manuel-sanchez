import React, { forwardRef } from 'react'
import SectionWrapper from './SectionWrapper'

const Photo = forwardRef(function Photo(props, ref) {
   return (
      <SectionWrapper ref={ref} {...props}>
         {' '}
         Photo
      </SectionWrapper>
   )
})

export default Photo
