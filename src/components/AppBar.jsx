import Link from 'next/link'
import React from 'react'

export default function AppBar() {
   const sections = [
      { name: 'Inicio', ref: 'home' },
      { name: 'Hard skills', ref: 'hard' },
      { name: 'Soft skills', ref: 'soft' },
      { name: 'Proyectos', ref: 'proyects' },
   ]
   return (
      <header className="fixed top-0 z-50 w-full bg-red-400">
         <nav className=" flex  h-slimTopAppBar  items-center justify-between px-16 text-xl text-bronze   lg:h-fatTopAppBar">
            <div>Manuel</div>
            <div className="hidden  gap-11 lg:flex">
               <div className="flex gap-8">
                  {sections.map((section) => (
                     <Link
                        href={`#${section.ref}`}
                        className="hover:text-white"
                        //  type="button"
                        key={section.name}
                     >
                        {section.name}
                     </Link>
                  ))}
               </div>
               <button className="hover:text-white">Descargar CV</button>
            </div>
            <div className="block lg:hidden">PANEL</div>
         </nav>
      </header>
   )
}
