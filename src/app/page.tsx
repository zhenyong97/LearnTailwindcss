import linkJson from "./../link.json"
import Link from "next/link"

export default function Home() {

  const linkdata = linkJson["project"]
  console.log(linkdata)
  return (
    <div className='flex bg-gray-100'>
      <div className="flex min-h-screen flex-col w-full items-center p-20">
        <h1 className="text-indigo-400 text-6xl font-bold">TailWind学习</h1>
        <ul className="flex flex-1 flex-col space-y-4 mt-20">
          {
            linkdata.map((data)=>{
              return <li className="hover:text-orange-300 text-xl font-medium" ><Link href={data.link}>{data.name}</Link></li>
            }) 
          }
        </ul>
      </div>
    </div>
  )
}
