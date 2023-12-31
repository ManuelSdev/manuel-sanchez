import React from 'react'

export const HtmlIcon = ({ className, ...props }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 452 520"
         className={className}
         {...props}
      >
         <path d="M41 460L0 0h451l-41 460-185 52" />
         <path fill="#A6917D" d="M226 472l149-41 35-394H226" />
         <path
            className="fill-bronze"
            d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
         />
         <path
            className="fill-bronze"
            d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
         />
      </svg>
   )
}
