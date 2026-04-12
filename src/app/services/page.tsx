import { bann } from '@/assets'
import Banner from '@/components/global/banner'
import CountDown from '@/components/home/Contdown'
import Testimonials from '@/components/home/testimonial'
import WhychooseSection from '@/components/home/whychoose'
import ServiceSection from '@/components/services/service'
import Serviceschoose from '@/components/services/whyChoose'
import React from 'react'

function Services() {
  return (
    <>
       <Banner
             img={bann}
             title={"Our Services"}
             para={
               "Our immigration services offer clear guidance, accurate documentation, and end-to-end support for global visa applications."
             }
             slug={"services"}
           />
<ServiceSection/> 
<WhychooseSection/>
<Testimonials/>

                  {/*  
                  <CountDown data={countDown} />
                      <Serviceschoose/> */}
    </>
  )
}

export default Services
