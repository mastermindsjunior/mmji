import React from 'react'
import Banner from '../components/common/Banner'
import Image from 'next/image'
import MissionVision from '../components/about/MissionVision'

const page = () => {
  return (
    <main>
    <Banner title={"About"} sub={'Us'}/>
    <MissionVision/>
      
    </main>
  )
}

export default page
