import React from 'react'
import Banner from '../components/common/Banner'
import ServiceList from '../components/services/ServiceList'

export const metadata = {
  title: "Digital Marketing Services in India | MasterMinds Junior India",
  description: "Explore digital marketing services in India including SEO, social media marketing, web development, app development, branding, content writing, Google Ads and Meta Ads.",
};
const page = () => {
  return (
    <main>
          <Banner title={"Our"} sub={'Services'}/>
          <ServiceList/>
    </main>
  )
}

export default page
