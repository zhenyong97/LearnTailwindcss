import React from 'react'
import ReactLogo from './react-logo.svg'

type Props = {}

const page = (props: Props) => {
  const pc_background_image_url:string = 'https://res.cloudinary.com/endurance-zone/image/fetch/r_00,f_auto/https://rewards.endurancezone.com/AwareIM/EzRewards_images/login/splash.jpg'
  const mobile_background_image_url:string = 'https://res.cloudinary.com/endurance-zone/image/fetch/r_00,f_auto/https://rewards.endurancezone.com/AwareIM/EzRewards_images/login/Splash_Default_1125_x_2464.jpg'

  return (
    <div className='max-h-screen h-screen '>
        {/* header */}
        <div className='h-[64px] w-full flex items-center justify-center bg-slate-50 px-2'>
            <div className='sm:justify-center flex flex-1'>
                <ReactLogo className='w-[60px] h-[50px] cursor-pointer' />
            </div>
        </div>
        {/* content */}
        <div className='bg-mobile-login-backgound sm:bg-pc-login-backgound bg-top sm:bg-center bg-cover h-[calc(100vh_-_64px)] min-h-[800px]'>
            <div className='sm:w-[600px] flex flex-col justify-center sm:pt-[80px] sm:pl-[150px] pt-10 justify-items-center items-center'>
                <h1 className='font-sans sm:text-5xl font-bold mb-5 text-3xl text-center sm:text-start'>START ENJOYING YOUR REWARDS</h1>

                <div className='bg-white flex justify-center w-[370px] sm:w-[450px] h-[340px] rounded-xl'>
                    <div className='p-[35px] h-[320px] flex flex-col justify-between'>
                        <p className='mt-3'>Please enter a valid email to receive a verification code</p>
                        
                        <div className='flex flex-col justify-start'>
                            <label htmlFor="email_input" className="block text-[16px] font-medium font-sans leading-8 text-gray-900">Enter your email address</label>
                            <input name='email_input' id='email_input' placeholder='name@example' type="text" className='focus:bg-gray-50 h-[50px]' />
                            
                        </div>
                        
                        <button className='mt-2 px-[130px] py-[15px] bg-slate-800 text-md text-white font-mono rounded-full hover:bg-slate-900' type='submit'>Continue</button>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}

export default page