'use client'
import React, { useRef, useState } from 'react'
import Photo from './sections/Photo'
import Name from './sections/Name'
import HardSkills from './sections/HardSkills'
import SoftSkills from './sections/SoftSkills'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/utils/cn'

export default function SectionContainer() {
   const [first, setFirst] = useState('')

   const nameRef = useRef(null)
   const photoRef = useRef(null)
   const hardSkillsRef = useRef(null)
   const softSkillsRef = useRef(null)

   const [inViewNameRef, inViewName] = useInView({
      /* Optional options */
      threshold: 0.1,
      onChange: (inView, entry) => {
         console.log('inViewName', inView)
         //  inView && nameRef.current.scrollIntoView({ behavior: 'smooth' })
         //    inView && nameRef.current.scrollIntoView()
      },
   })
   const [inViewPhotoRef, inViewPhoto] = useInView({
      /* Optional options */
      threshold: 0.1,
      onChange: (inView, entry) => {
         console.log('inViewPhoto', inView)
         // inView && photoRef.current.scrollIntoView({ behavior: 'smooth' })
         inView && photoRef.current.scrollIntoView()
      },
   })
   const [inViewHardSkillsRef, inViewHardSkills] = useInView({
      /* Optional options */
      threshold: 0.1,
      onChange: (inView, entry) => {
         console.log('inViewHardSkills', inView)
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
   //   const he
   const handleScroll = (e) => {
      //  e.preventDefault()
      if (e.deltaY > 0) setFirst('translate-y-full')
      if (e.deltaY < 0) setFirst('-translate-y-full')
      //console.log(e.target.scrollTop)
      console.log(e.deltaY)
      //   console.log(e)
      //  console.log(window.innerHeight)
   }
   //  console.log('inView', inView)

   //console.log(nameRef.current)
   return (
      <div
         //onScroll={(e) => console.log(e)}
         // onWheel={(e) => console.log(window.innerHeight)}
         // onWheel={handleScroll}
         className={clsx(
            'mt-slimTopAppBar h-slimBarScreen md:mt-fatTopAppBar  md:h-fatBarScreen',
            //   'snap-y snap-mandatory overflow-auto scroll-smooth md:h-fatBarScreen'
            //'overflow-y-scroll scroll-smooth'
            ' overflow-y-auto'
            // 'scroll-smooth'
         )}
      >
         <button
            className="top-100 absolute right-20"
            onClick={(e) =>
               softSkillsRef.current.scrollIntoView({ behavior: 'smooth' })
            }
         >
            hola
         </button>
         <div ref={inViewNameRef}>
            <Name
               id={'name'}
               ref={nameRef}
               className={'bg-blue-400'}
               // first={first}
            />
         </div>

         <div ref={inViewPhotoRef}>
            <Photo id={'photo'} ref={photoRef} className={' bg-green-200'} />
         </div>

         <div ref={inViewHardSkillsRef}>
            <HardSkills
               id={'hardSkills'}
               ref={hardSkillsRef}
               className={'bg-violet-200'}
            />
         </div>

         <div ref={inViewSoftSkillsRef}>
            <SoftSkills
               id={'softSkills'}
               ref={softSkillsRef}
               className={'bg-amber-200'}
            />
         </div>
      </div>
   )
}
/*
<button onClick={(e) => setFirst('translate-y-9')}>hola</button>
<Photo className={'top-full bg-green-200'} />
<HardSkills className={'bg-violet-200'} />
         <SoftSkills className={'bg-amber-200'} />
         */
