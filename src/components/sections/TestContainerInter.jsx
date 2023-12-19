'use client'
import { cn } from '@/utils/cn'
import React, { useRef, useState } from 'react'
import { SectionHeader, SectionContent, SectionBlock } from '@/modules/section'
import { useInView } from 'react-intersection-observer'

export default function TestContainerInter({ className }) {
   const initialState = {
      name: '',
      photo: '',
      hardSkills: '',
      softSkills: '',
   }
   const [first, setFirst] = useState('')
   const [mutationClass, setMutationClass] = useState(initialState)

   const nameRef = useRef(null)
   const photoRef = useRef(null)
   const hardSkillsRef = useRef(null)
   const softSkillsRef = useRef(null)

   function findPosition(obj) {
      var currenttop = 0
      if (obj.offsetParent) {
         do {
            currenttop += obj.offsetTop
         } while ((obj = obj.offsetParent))
         return [currenttop]
      }
   }
   const [inViewNameRef, inViewName] = useInView({
      /* Optional options */
      threshold: 0.01,
      onChange: (inView, entry) => {
         console.log('inViewName', inView)
         //    inView && nameRef.current.scrollIntoView({ behavior: 'smooth' })
         //inView && photoRef.current.scrollIntoView()
         inView &&
            window.scrollTo({
               top: findPosition(nameRef.current),
               behavior: 'smooth',
            })
      },
   })
   const [inViewPhotoRef, inViewPhoto] = useInView({
      /* Optional options */
      threshold: 0.01,
      onChange: (inView, entry) => {
         //    setFirst('overflow-y-hidden')
         console.log('inViewPhoto', inView)
         // inView && photoRef.current.scrollIntoView({ behavior: 'smooth' })
         // inView && photoRef.current.scrollIntoView()
         // inView && window.scrollTo(0, findPosition(hardSkillsRef.current))
         inView &&
            window.scrollTo({
               top: findPosition(photoRef.current),
               behavior: 'smooth',
            })
         //  inView && setFirst('overflow-y-hidden')
      },
   })
   // console.log('=======', hardSkillsRef)
   const [inViewHardSkillsRef, inViewHardSkills] = useInView({
      /* Optional options */
      threshold: 0.01,
      onChange: (inView, entry) => {
         console.log('inViewHardSkills', inView)
         inView &&
            window.scrollTo({
               top: findPosition(hardSkillsRef.current),
               behavior: 'smooth',
            })
         // inView && hardSkillsRef.current.scrollIntoView({ behavior: 'smooth' })
         //   inView && hardSkillsRef.current.scrollIntoView()
      },
   })

   const [inViewSoftSkillsRef, inViewSoftSkills] = useInView({
      /* Optional options */
      threshold: 0.1,
      onChange: (inView, entry) => {
         console.log('inViewSoftSkills', inView)
         //inView && softSkillsRef.current.scrollIntoView({ behavior: 'smooth' })
         //    inView && softSkillsRef.current.scrollIntoView()
      },
   })
   const a = ['h-slimBarScreen w-full', 'lg:h-fatBarScreen']
   return (
      <div
         //   onScroll={(e) => console.log('aaaaaaaa', e)}
         id="SectionContainer"
         className={cn(
            'absolute w-full lg:right-sideBarWidth',
            //  'top-slimTopAppBar  lg:top-fatTopAppBar',
            //'min-h-slimBarScreen lg:min-h-fatBarScreen',
            'h-screen',
            //     'overflow-auto',
            //  'overflow-x-hidden',
            //  ' snap-y snap-mandatory overflow-y-visible ',
            className
            //   first
         )}
      >
         <div ref={inViewNameRef}>
            <div
               ref={nameRef}
               className={cn(
                  'py-slimTopAppBar lg:py-fatTopAppBar',
                  'TEST-1',
                  'min-h-screen',
                  'bg-green-400',
                  //   'w-full',
                  'snap-center'
               )}
            ></div>
         </div>

         <div ref={inViewPhotoRef}>
            <div
               ref={photoRef}
               className={cn(
                  //        'absolute top-slimTopAppBar',
                  'py-slimTopAppBar lg:py-fatTopAppBar',
                  'TEST-2',
                  'min-h-screen',

                  'bg-blue-400'
                  //  'w-full',
                  // 'snap-center'
               )}
            ></div>
         </div>

         <div ref={inViewHardSkillsRef}>
            <div
               ref={hardSkillsRef}
               className={cn(
                  'TEST-3',
                  'py-slimTopAppBar lg:py-fatTopAppBar',
                  'min-h-screen',

                  'bg-yellow-400',
                  //    'w-full',
                  'snap-center'
               )}
            ></div>
         </div>
      </div>
   )
}
