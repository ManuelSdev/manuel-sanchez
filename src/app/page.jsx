import AppBar from '@/components/AppBar'
import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image'

export default function Home() {
   return (
      <div className=" overflow-hidden">
         <AppBar />
         <SectionContainer />
      </div>
   )
}
