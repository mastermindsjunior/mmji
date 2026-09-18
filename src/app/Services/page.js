import React from 'react'
import Banner from '../components/common/Banner'
import ServiceList from '../components/services/ServiceList'

export const metadata = {
  title: "Digital Marketing Services in India | MasterMinds Junior India",
  description: "Explore digital marketing services in India including SEO, social media marketing, web development, app development, branding, content writing, Google Ads and Meta Ads.",
  keywords: [
  "Digital Marketing Services in India",
  "SEO Services in India",
  "Social Media Marketing Services in India",
  "Web Development Services in India",
  "Google Ads Agency in India"
],
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
