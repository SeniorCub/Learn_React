import Header from "./Header"
import wiki from "../assets/images/wiki-template.png"
import { FaBookOpen } from "react-icons/fa"

const NextSection1 = () => {
     return (
     <>
          <div className="container my-16">
               <Header title={"Start with a template. Build anything."} linkText={"Browse all templates"} style={"w-2/3"} />
               <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray2 p-5 rounded-xl pb-0">
                         <div>
                              <div className="mb-5">
                                   <div><FaBookOpen className="text-red-500 text-4xl" /></div>
                                   <a href="#" className="flex justify-start items-center text-black gap-1">Company Wiki <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></a>
                              </div>
                              <div><img src={wiki} alt="" /></div>
                         </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3"></div>
               </div>
          </div>
     </>
     )
}

export default NextSection1
