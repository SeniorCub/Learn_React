import Header from "./Header"
import SmallBox from "./SmallBox"
import wiki from "../assets/images/wiki-template.png"
import { FaBookOpen } from "react-icons/fa"

const NextSection1 = () => {
     return (
     <>
          <div className="container my-16">
               <Header title={"Start with a template. Build anything."} linkText={"Browse all templates"} style={"w-2/3 mb-5"} />
               <div className="grid grid-cols-2 gap-3 max-h-[10vh]">
                    <SmallBox name={"Comapny Wiki"} icon={<FaBookOpen className="text-red-500 text-5xl" />} img={wiki} />
                    <div className="grid grid-cols-2 gap-3">
                         <SmallBox name={"Comapny Wiki"} icon={<FaBookOpen className="text-red-500 text-5xl" />} />
                         <SmallBox name={"Comapny Wiki"} icon={<FaBookOpen className="text-red-500 text-5xl" />} />
                         <SmallBox name={"Comapny Wiki"} icon={<FaBookOpen className="text-red-500 text-5xl" />} />
                         <SmallBox name={"Comapny Wiki"} icon={<FaBookOpen className="text-red-500 text-5xl" />} />
                         <SmallBox name={"Comapny Wiki"} icon={<FaBookOpen className="text-red-500 text-5xl" />} />
                         <SmallBox name={"Comapny Wiki"} icon={<FaBookOpen className="text-red-500 text-5xl" />} />
                    </div>
               </div>
          </div>
     </>
     )
}

export default NextSection1
