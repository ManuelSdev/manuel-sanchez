import React from 'react'

export default function SkillGrid({ skillList, iconProps }) {
   return (
      <div className="grid grid-cols-3 gap-3 2xl:grid-cols-4 ">
         {skillList.map((skill, index) => {
            const { Icon, name } = skill
            return (
               <div key={name} className="pb-1  ">
                  <div className="flex flex-col items-center	">
                     <Icon
                        {...iconProps}
                        width={82}
                        height={82}
                        // viewBox="0 0 1000 1000"
                        className=" rounded-lg border border-bronze bg-bronze p-0.5"
                     />
                     <div className="pt-1 text-center">{name}</div>
                  </div>
               </div>
            )
         })}
      </div>
   )
}
