import React from 'react'
import Banner from '../components/common/Banner'
import Image from 'next/image'
import MissionVision from '../components/about/MissionVision'
import Stats from '../components/about/Stats'
import WhyChooseUs from '../components/about/WhyChooseUs'
import HistorySection from '../components/about/OurHistory'
import VisionSection from '../components/about/AboutHeading'
import AboutSection from '../components/about/AboutHeading'

const page = () => {
  return (
    <main>
    <Banner title={"About"} sub={'Us'}/>
    <AboutSection/>
    <MissionVision/>
    <Stats />
    <WhyChooseUs/>
    <HistorySection/>
    </main>
  )
}

export default page
