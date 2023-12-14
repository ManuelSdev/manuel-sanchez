import React from 'react'
import SectionWrapper from './SectionWrapper'
import SectionContent from './SectionContent'

export default function ProyectsSection({ ...props }) {
   return (
      <SectionWrapper {...props}>
         <SectionContent title={'Proyectos'}>hola</SectionContent>
      </SectionWrapper>
   )
}
