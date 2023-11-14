import React from 'react'

 


type Props = {}

const page = (props: Props) => {
    // http://prodtest11.appmyezrewards.com/preload/thriveologie?iframe=exx6lFgs1tqobucV
  return (
    
    <div className='container flex justify-center h-screen items-center'>
        <div className='flex flex-col'>
        <h2 className='text-2xl text-center mb-3'>Iframe Show</h2>
        <div className='w-[350px] h-[600px] border-[3px] border-gray-600'>
        <iframe width="350px" height="600px" className='p-2' name="EZR" src="//prodtest11.appmyezrewards.com/preload/thriveologie?iframe=exx6lFgs1tqobucV">

        </iframe>
        </div>
        </div>
    </div>
  )
}

export default page