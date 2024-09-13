import wiki from "../assets/images/wiki-template.png"
import { FaBookOpen } from "react-icons/fa"

const SmallBox = ({icon, name, img}) => {
     return (
     <>
          <div className="bg-gray2 p-7 rounded-xl pb-0">
               <div className="mb-8 space-y-4">
                    <div>{icon}</div>
                    <a href="#" className="flex justify-start items-center text-black gap-1 font-bold text-lg">{name} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 font-bold"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></a>
               </div>
               <div><img src={img} alt="" /></div>
          </div>
     </>
     )
}

export default SmallBox
