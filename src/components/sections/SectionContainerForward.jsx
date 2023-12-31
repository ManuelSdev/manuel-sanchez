'use client'
import React, { useRef, useState } from 'react'

import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'

import NameSectionForward from './noUseForwardRef/NameSectionForward'
import PhotoSectionForward from './noUseForwardRef/PhotoSectionForward'
import HardSkillsSectionForward from './noUseForwardRef/HardSkillsSectionForward'
import SoftSkillsSectionForward from './noUseForwardRef/SoftSkillsSectionForward'
import PhotoSection from './PhotoSection'
import { cn } from '@/utils/cn'

export default function SectionContainerForward({ className }) {
   const [first, setFirst] = useState('')

   const nameRef = useRef(null)
   const photoRef = useRef(null)
   const hardSkillsRef = useRef(null)
   const softSkillsRef = useRef(null)

   const [inViewNameRef, inViewName] = useInView({
      /* Optional options */
      threshold: 0.1,
      onChange: (inView, entry) => {
         console.log('inViewName', entry)
         //  inView && nameRef.current.scrollIntoView({ behavior: 'smooth' })
         //inView && photoRef.current.scrollIntoView()
      },
   })
   const [inViewPhotoRef, inViewPhoto] = useInView({
      /* Optional options */
      threshold: 0.00001,
      onChange: (inView, entry) => {
         console.log('inViewPhoto', inView)
         // inView && photoRef.current.scrollIntoView({ behavior: 'smooth' })
         //   inView && photoRef.current.scrollIntoView()
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
   const initialState = {
      name: '',
      photo: '',
      hardSkills: '',
      softSkills: '',
   }

   const [mutationClass, setMutationClass] = useState(initialState)

   const handleScroll = (e) => {
      const isEl = (element) => e.target.className.includes(element)
      console.log('e ', e)
      //   e.preventDefault()
      if (e.deltaY > 0) {
         if (isEl('NAME')) {
            setMutationClass({
               ...initialState,
               name: 'delay-1000 -translate-y-full',
               //   name: ' -top-800 ',
               photo: '-translate-y-full',
            })
         }
         if (isEl('PHOTO')) {
            setMutationClass({
               ...mutationClass,
               photo: 'delay-1000 -translate-y-full',
               hardSkills: '-translate-y-full ',
            })
         }
         if (isEl('HARD')) {
            setMutationClass({
               ...mutationClass,
               softSkills: '-translate-y-full ',
            })
         }
         if (isEl('SOFT')) {
         }
      }
      if (e.deltaY < 0) {
         if (isEl('NAME')) {
         }
         if (isEl('PHOTO')) {
            setMutationClass({
               ...initialState,
               photo: 'delay-1000 ',
               name: 'z-10',
               //   hardSkills: '-translate-y-full ',
            })
         }
         if (isEl('HARD')) {
            setMutationClass({
               ...mutationClass,
               hardSkills: 'translate-y-full ',
            })
         }
         if (isEl('SOFT')) {
            setMutationClass({
               ...mutationClass,
               softSkills: 'translate-y-full ',
            })
         }
      }
      setFirst('translate-y-full')
      if (e.deltaY < 0) setFirst('-translate-y-full')
      //console.log(e.target.scrollTop)
      // console.log(e.deltaY)
      //  console.log(e.target.className.includes('NAME'))
      console.log(isEl('NAME'))
      //  console.log(window.innerHeight)
   }
   //  console.log('inView', inView)

   //  console.log(inViewNameRef)
   return (
      <div
         //onScroll={(e) => console.log(e)}
         // onWheel={(e) => console.log(window.innerHeight)}
         //  onWheel={handleScroll}
         className={cn(
            'relative mt-slimTopAppBar h-slimBarScreen md:mt-fatTopAppBar  md:h-fatBarScreen',
            //   'snap-y snap-mandatory overflow-auto scroll-smooth md:h-fatBarScreen'
            //'overflow-y-scroll scroll-smooth'
            //  ' overflow-y-auto'
            // 'scroll-smooth'
            className
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
         <PhotoSection className={'bg-green-200 lg:hidden'} />

         <div ref={inViewNameRef}>
            <div className="absolute left-0 top-0 z-30 h-8 w-full bg-violet-600" />
            <NameSectionForward
               id={'name'}
               ref={nameRef}
               // className={'NAME left-0 top-0 z-0  bg-blue-400'}
               mutationClass={mutationClass.name}
            />
         </div>

         <div ref={inViewPhotoRef}>
            <div className="absolute left-0 top-0 z-30 h-8 w-full bg-violet-600" />
            <PhotoSectionForward
               id={'photo'}
               ref={photoRef}
               //className={'PHOTO 0 left-0  top-full bg-green-200'}
               mutationClass={mutationClass.photo}
            />
         </div>

         <div ref={inViewHardSkillsRef}>
            <div className="absolute left-0 top-0 z-30 h-8 w-full bg-violet-600" />
            <HardSkillsSectionForward
               id={'hardSkills'}
               ref={hardSkillsRef}
               // className={'HARD left-0 top-full z-0 bg-violet-200'}
               mutationClass={mutationClass.hardSkills}
            />
         </div>

         <div ref={inViewSoftSkillsRef}>
            <div className="absolute left-0 top-0 z-30 h-8 w-full bg-violet-600" />
            <SoftSkillsSectionForward
               id={'softSkills'}
               ref={softSkillsRef}
               //     className={'SOFT left-0 top-full z-0 bg-amber-200'}
               mutationClass={mutationClass.softSkills}
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
