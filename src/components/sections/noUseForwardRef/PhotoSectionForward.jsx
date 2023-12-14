import React, { forwardRef } from 'react'
import SectionWrapperForward from '../SectionWrapperForward'

const PhotoSectionForward = forwardRef(
   function PhotoSectionForward(props, ref) {
      return (
         <SectionWrapperForward ref={ref} {...props}>
            {' '}
            Photo
         </SectionWrapperForward>
      )
   }
)

export default PhotoSectionForward
