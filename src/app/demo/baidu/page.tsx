import type { Metadata } from 'next'
import Link from "next/link"
import Image from 'next/image';
import CameraLogo from './camera-svgrepo-com.svg'
import SwitchLogo from './switch.svg'
import RightArrowLogo from './right-arrow.svg'
import TopSideLogo from './topside.svg'
import { idText } from 'typescript';


export const metadata: Metadata = {
    title: 'TailwindLearn-Baidu',
    description: 'Generated by create next app',
  }


  export default function Page() {
    const  baiduLogoUrl:string = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"

    return (
      <div className="flex w-full h-screen  text-black">
        <div className=" flex flex-1 flex-col">
            <div className='flex justify-between p-5 text-[13px] '>
                <ul className='flex gap-5 items-center'>
                    <li className='hover:text-indigo-500'><Link href='#'>新闻</Link></li>
                    <li className='hover:text-indigo-500'><Link href='#'>hao123</Link></li>
                    <li className='hover:text-indigo-500'><Link href='#'>地图</Link></li>
                    <li className='hover:text-indigo-500'><Link href='#'>贴吧</Link></li>
                    <li className='hover:text-indigo-500'><Link href='#'>视频</Link></li>
                    <li className='hover:text-indigo-500'><Link href='#'>图片</Link></li>
                    <li className='hover:text-indigo-500'><Link href='#'>网盘</Link></li>
                    <li className='hover:text-indigo-500'><Link href='#'>更多</Link></li>
                </ul>
                <ul className='flex gap-8 items-center'>
                    <img className='w-[24px] h-[24px]' alt="baidu-ai" src="data:image/png;base64,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" ></img>
                    <li className='hover:text-indigo-500'><Link href='#'>设置</Link></li>
                    <button className='px-[14px] py-1 rounded-lg bg-[#3159e9] hover:bg-[#4a70f8] text-white font-medium'><Link href='#'>登录</Link></button>
                </ul>
            </div>
            <div className='flex w-[700px] mx-auto mt-10 flex-col justify-center items-center gap-5'>
                <img className='w-[270px] h-[120px]' src={baiduLogoUrl}></img>
                {/* Input 输入框 */}
                <div className='flex'>
                    <div className='w-[500px] relative'>
                        <input type="text" className='w-full rounded-l-xl focus:border-indigo-400 border-r-0 rounded-r-none  border-2 h-[43px] overflow-hidden border-gray-300' />
                        
                        <div className='absolute inset-y-2 right-2 text-gray-500 group flex'>
                            {/*  */}
                           
                            <CameraLogo className='w-[24px] h-[24px] cursor-pointer stroke-2 stroke-current group-hover:stroke-indigo-600 ' />
                            
                            <div className="absolute -inset-x-10 -bottom-[50px] hidden items-center group-hover:flex">
                                <div className="relative whitespace-nowrap rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-900 drop-shadow-lg">
                                <div className="absolute inset-1 left-5 flex items-center">
                                </div>
                                    按图片搜索
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <button className='px-[15px] rounded-r-xl py-1 bg-[#3159e9]  hover:bg-[#4a70f8] text-white font-medium'>百度一下</button>        
                </div>
                {/* content-header */}
                <div className='flex mt-5 justify-between w-[600px]'>
                    <a href="#" className='flex font-mono font-bold text-md items-center group text-black'><span className='group-hover:text-[#4a70f8]'>百度热搜</span> <RightArrowLogo className='ml-1 w-[14px] h-[14px] cursor-pointer fill-current group-hover:fill-[#4a70f8]' /> </a>
                    <a href="#" className='flex font-mono font-bold text-md items-center group text-black'><SwitchLogo className='mr-1 w-[14px] h-[14px] cursor-pointer stroke-current group-hover:stroke-[#4a70f8]' /> <span className='group-hover:text-[#4a70f8]'>换一换</span> </a>
                </div>
                {/* content-content */}
                <div className='flex mt-3 justify-around w-[600px]'>
                    <div className='flex flex-col basis-1/2'>
                        <a href="#" className='flex items-center'><TopSideLogo className='mr-3 w-[16px] h-[18px] cursor-pointer stroke-2  stroke-red-600' /> <span>asdasdasdasdasdasd</span> </a>
                        <a href="#" className='flex items-center' ><span className='text-lg font-medium text-red-600 mr-4'>1</span>asdasdasdasdasdasd</a>
                        <a href="#" className='flex items-center'><span className='text-lg font-medium text-red-400 mr-4'>2</span>asdasdasdasdasdasd</a>
                    </div>
                    <div className='flex flex-col  basis-1/2 '>
                        <a href="#" ><span className='text-lg font-semibold text-red-300 mr-3'>3</span> <span> </span> <span className='ml-2 bg-orange-500 px-[4px] py-[2px] rounded-md text-white text-sm/[3px] '>热</span></a>
                        <a href="#" className='flex items-center' ><span className='text-lg font-medium text-gary-500 mr-4'>4</span>asdasdasdasdasdasd</a>
                        <a href="#" className='flex items-center' ><span className='text-lg font-medium text-gray-500 mr-4'>5</span>asdasdasdasdasdasd</a>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
  