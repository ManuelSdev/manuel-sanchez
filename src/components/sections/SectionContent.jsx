import React from 'react'

export default function SectionContent({ title, children }) {
   return (
      <div>
         {' '}
         <div className="pb-14 text-center font-serif text-6xl font-bold text-bronze xl:text-left ">
            {title}
         </div>
         <div>{children}</div>
      </div>
   )
}
