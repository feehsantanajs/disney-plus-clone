import Image from 'next/image'

import BgImage from '../../assets/login-background.jpg'
import CTAlogo from '../../assets/cta-logo-one.svg'

export default function login(){
  return (
    <div className="flex flex-col overflow-hidden items-center justify-center h-[100%] text-center">
      <Image src={BgImage} fill alt='background imagem disney' />
      <main className="flex flex-col justify-center items-center mb-10vw w-[100%] h-[100%] min-h-[100vh] relative py-[8rem] px-[4rem] ">
        <div className='mt-0 mb-2vw max-w-[65rem] flex flex-col justify-center items-center flex-wrap '>
          <Image src={CTAlogo} alt="Picture of the author" />
          <a className='font-bold #f9f9f9 bg-[#0063e5] w-[100%] py-[0.5rem] rounded cursor-pointer'>GET ALL THERE</a>
        </div>

        
      </main>
    </div>
  )
}