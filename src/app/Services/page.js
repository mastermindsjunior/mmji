import React from 'react'
import Banner from '../components/common/Banner'
import ServiceList from '../components/services/ServiceList'

const page = () => {
  return (
    <main>
          <Banner title={"Our"} sub={'Services'}/>
          <ServiceList/>
    </main>
  )
}

export default page
