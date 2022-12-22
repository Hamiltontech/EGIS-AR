import React from 'react'
import Image from 'next/image'
import logo1 from '../../public/assets/Layer.png'
import logo2 from '../../public/assets/GeoServer.png'
import logo3 from '../../public/assets/MaxCDN.png'
import logo4 from '../../public/assets/microsoft.png'

const AboutSection = () => {
  return (
    <div className=''>
               <div className=' w-full flex justify-center mt-20'>
                <div className='grid justify-center'>
                    <h1 className='text-3xl text-[#162641]/70 text-center'>مدعم بأفضل التكنولوجيا المتاحة</h1>
                    <p className='text-[#162641]/80 text-center mt-5 font-extralight text-2xl'>هذا هو الإصدار 1.0.0 من GIS Platform الخاص بنا والذي يتم تقديمه عبر الويب باعتباره SaaS مدعومًا بأعلى مستوى من الأمان وأفضل بنية تحتية لخدمة معلوماتك على الفور</p>


                    <div className='flex justify-evenly my-20 gap-8'>
                        <Image src={logo1} width={200} />
                        <Image src={logo2} width={200} />
                        <Image src={logo3} width={200} />
                        <Image src={logo4} width={200} />
                    </div>
                </div>


            </div>
    </div>
  )
}

export default AboutSection