import { SectionHeader, SectionContent, SectionBlock } from '@/modules/section'
import clsx from 'clsx'

export default function NameSection(props) {
   // console.log('ref', ref)

   return (
      <SectionBlock {...props}>
         <div className="py-24">
            <div
               className={clsx(
                  // 'hidden lg:block',
                  // 'inline-block',
                  '-ml-20 pl-11',
                  //   'mt-24 py-11 ',
                  'rounded-l-full bg-black font-serif text-3xl font-semibold  text-bronze',
                  'min-[500px]:-ml-24 min-[500px]:text-4xl',
                  'min-[700px]:text-5xl',
                  'lg:-ml-24 lg:p-20  lg:text-6xl',
                  'xl:-ml-40 xl:text-8xl',
                  '2xl:-ml-48',
                  'min-[1660px]:p-28'
               )}
            >
               <div>Manuel</div>
               <div>Sánchez Manzanares</div>
            </div>
         </div>

         <div>hola</div>
      </SectionBlock>
   )
}
// <SectionContent className={'lg:py-12'}>Hola</SectionContent>
