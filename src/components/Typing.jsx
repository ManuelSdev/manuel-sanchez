'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Typing(props) {
   return (
      <div id="tipee" {...props}>
         <Typewriter
            options={{
               strings: [
                  'FULL STACK WEB DEVELOPER',
                  'WEB DESIGNER',
                  'STUDYING DEVOPS & CLOUD <br> COMPUTING BOOTCAMP',
               ],
               autoStart: true,
               loop: true,
               delay: 35,
               deleteSpeed: 30,
            }}
         />
      </div>
   )
}
