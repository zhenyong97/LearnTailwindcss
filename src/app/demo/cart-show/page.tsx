"use client";

import Image from "next/image";
import { MouseEvent, useState } from "react";
import LightIcon from "@/app/demo/cart-show/_assests/light.svg";
import DarkIcon from "@/app/demo/cart-show/_assests/dark.svg";
import StarIcon from "@/app/demo/cart-show/_assests/star.svg";

type SizeItemProps = {
  key: string;
  checked: boolean;
  onSizeItemClick: (e: MouseEvent, key: string) => void;
  children: React.ReactNode;
};

const SizeItem = ({
  key,
  checked,
  onSizeItemClick,
  children,
}: SizeItemProps) => {
  return (
    <div
      className={`rounded-full p-2 w-8 h-8 items-center font-bold justify-center cursor-pointer flex ${
        checked ? "bg-[#3b6de9] text-white" : "text-black dark:text-white"
      }`}
      onClick={(e) => onSizeItemClick(e, key)}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [dark, setDark] = useState<boolean>(false);
  const sizes: Array<string> = ["XS", "S", "M", "L", "XL"];
  const [size, setSize] = useState<string>("M");


  return (
    <div className={`p-4 ${dark ? "dark" : ""}`}>
      {dark ? (
        <button onClick={() => setDark(!dark)}>
          <LightIcon className="w-5 h-5" />
        </button>
      ) : (
        <button onClick={() => setDark(!dark)}>
          <DarkIcon className="w-5 h-5" />
        </button>
      )}
      {/* https://www.footlocker.com.au/en/product/~/246782010404.html */}
      <div className="dark:bg-[#18181b] dark:text-[#ecedee] bg-white text-[#12181c] w-full rounded-lg flex gap-4 relative shadow-middle rounded-large outline-2 p-5 flex-col md:flex-row max-w-2xl md:m-auto">
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
            <h1 className="text-xl font-bold">Nike Freak 5</h1>
            <p className="my-2 text-slate-500">Grade School</p>
          </div>
          <span className="text-xl font-semibold">$140</span>
          <span className="ml-3 font-semibold text-slate-500 line-through">
            $169
          </span>
          <span className="ml-2 text-green-400 font-bold">优惠 20%</span>

          {/* 尺寸 */}
          <div className="flex gap-2 my-4 text-sm">
            {sizes.map((sizeItem) => (
              <SizeItem
                key={sizeItem}
                checked={size === sizeItem}
                onSizeItemClick={(e, key) => setSize(sizeItem)}
              >
                {sizeItem}
              </SizeItem>
            ))}
          </div>

          {/* 功能按钮 */}
          <div className="flex gap-4 text-sm">
            <button className="shadow-lg rounded-lg text-white bg-indigo-500  p-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-b dark:shadow-indigo-900 shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-400 hover:-translate-y-px">
              立即购买
            </button>
            <button className="border-2 border-[#3b6de9] text-[#3b6de9] p-3 rounded-full">
              加入购物车
            </button>
          </div>
        </div>
        <button className="hidden md:inline absolute right-5 top-5">
          <StarIcon className="w-8 h-8 dark:fill-white" />
        </button>
      </div>
    </div>
  );
}
