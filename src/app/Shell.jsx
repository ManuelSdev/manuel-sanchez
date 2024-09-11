import Header from '@/components/header/Header'
import React from 'react'

export default function Shell(props) {
   return (
      <div className="h-screen ">
         <Header />
         <div className="flex h-screen items-center bg-black">
            <div className="m-auto  h-96 w-96 bg-red-200">{props.children}</div>
         </div>
      </div>
   )
}
