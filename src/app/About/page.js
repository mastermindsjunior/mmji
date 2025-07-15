import React from 'react'
import Banner from '../components/common/Banner'
import Image from 'next/image'
import MissionVision, { MissionValuesSection } from '../components/about/MissionVision'
import Stats from '../components/about/Stats'
import WhyChooseUs from '../components/about/WhyChooseUs'
import HistorySection from '../components/about/OurHistory'
import VisionSection from '../components/about/AboutHeading'
import AboutSection from '../components/about/AboutHeading'
import TimelineSection from '../components/about/Timeline'
import Heading from '../components/about/Heading'
import { MeetTheTeamSection } from '../components/about/MeettheTeam'

const page = () => {
  return (
    <main className=' bg-black'>
    {/* <Banner title={"About"} sub={'Us'}/> */}
    <Heading/>
    <AboutSection/>
    <TimelineSection/>
    <MissionValuesSection/>
    <MeetTheTeamSection/>
    {/* <Stats /> */}
    {/* <WhyChooseUs/> */}
    {/* <HistorySection/> */}
    </main>
  )
}

export default page
