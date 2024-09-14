import Header from "./Header"
import SmallBox from "./SmallBox"
import wiki from "../assets/images/wiki-template.png"
import { FaBookOpen, FaBicycle, FaGgCircle, FaCalendarDay, FaTicketAlt, FaNewspaper, FaCheckCircle } from "react-icons/fa"

const NextSection1 = () => {
     return (
     <>
          <div className="container my-16">
               <Header title={"Start with a template. Build anything."} linkText={"Browse all templates"} style={"w-2/3 mb-5"} />
               <div className="grid grid-cols-2 gap-5 ">
                    <SmallBox name={"Comapny Wiki"} icon={<FaBookOpen className="text-red-500 text-5xl" />} img={wiki} />
                    <div className="grid grid-cols-2 gap-5">
                         <SmallBox name={"Project Roadmap"} icon={<FaBicycle className="text-blue-500 text-5xl" />} />
                         <SmallBox name={"OKRs"} icon={<FaGgCircle className="text-orange-500 text-5xl" />} />
                         <SmallBox name={"Meeting Notes"} icon={<FaNewspaper className="text-yellow-500 text-5xl" />} />
                         <SmallBox name={"Vacation Planner"} icon={<FaTicketAlt className="text-red-500 text-5xl" />} />
                         <SmallBox name={"Editorial Calendar"} icon={<FaCalendarDay className="text-blue-500 text-5xl" />} />
                         <SmallBox name={"Habit Tracker"} icon={<FaCheckCircle className="text-purple-500 text-5xl" />} />
                    </div>
               </div>
          </div>
     </>
     )
}

export default NextSection1
