import React from 'react'

export default function BottomBar() {
   return (
      <footer className="fixed bottom-0 z-50 w-full  bg-red-400 lg:hidden">
         <nav className="flex h-slimTopAppBar items-center justify-between gap-8 lg:h-fatTopAppBar">
            BOTTOM
         </nav>
      </footer>
   )
}
