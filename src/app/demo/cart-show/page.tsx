"use client";

import Image from "next/image";
import { MouseEvent, useState } from "react";
import LightIcon from "@/app/demo/cart-show/_assests/light.svg"
import DarkIcon from "@/app/demo/cart-show/_assests/dark.svg"
import StarIcon from "@/app/demo/cart-show/_assests/star.svg"


export default function Home() {
    const [dark, setDark] = useState<boolean>(false)
    const sizes:Array<string> = ["XS", "S", "M", "L", "XL"]
    const [size, setSize] = useState<string>("M")

    return (
        <div className={`p-4 ${dark ? "dark" : ""}`}>
            { dark ? (
                <button onClick={() => setDark(!dark)}>
                    <LightIcon className="w-5 h-5"/>
                </button>
            )
            : (
                <button onClick={() => setDark(!dark)}>
                    <DarkIcon className="w-5 h-5"/>
                </button>
            )
            }
            {/* https://www.footlocker.com.au/en/product/~/246782010404.html */}
            <div className="dark:bg-[#18181b] dark:text-[#ecedee] bg-white text-[#12181c] w-full rounded-xl flex gap-4 relative shadow-middle rounded-large outline-2 p-5 flex-col md:flex-row max-w-2xl md:m-auto">
                <div className="flex justify-center items-center relative w-full md:w-48 h-48 before:content-[''] before:bg-gradient-to-br from-[#010187] to-[#18000e] before:absolute before:w-full before:h-full before:rounded-lg">
                    <Image 
                     width={192}
                     height={192}
                     src="/shoe.webp"
                     alt="Nike Freak 5"
                     className="w-full absolute md:scale-125 p-5 transition-transform duration-300"
                     />
                     {/* md:scale-125 transition-transform duration-300 大于md的时候进行缩放， 已经在分辨率切换的时候给予过渡样式 */}
                </div>
                <div>
                    <div>
                        <h1 className="text-xl font-semibold">Nike Freak 5</h1>
                        <p className="my-2 text-slate-500">Grade School</p>
                    </div>
                    <span className="text-lg font-semibold">$140</span>
                    <span className="ml-3 font-semibold text-slate-500 line-through">$169</span>
                    <span className="ml-2 text-green-400 font-bold">优惠 20%</span>
                </div>

                {/* 尺寸 */}

                {/* 功能按钮 */}
            </div>
        
        </div>


    )
}


const SizeItem = () => {
    return (
        <>
        
        </>
    )
}