import Header from "./Header"
import SmallBox from "./SmallBox"
import {  FaBicycle, FaGgCircle, FaCalendarDay, FaTicketAlt, FaNewspaper, FaCheckCircle } from "react-icons/fa"
const EverythingSection = () => {
     return (
     <>
      <div className="container my-16">
          <Header title={"Everything you need to do your best work."} style={"w-3/5 mb-5"} />
          <div className="grid grid-cols-2 gap-5">
               <SmallBox name={"Project Roadmap"} icon={<FaBicycle className="text-blue-500 text-5xl" />} />
               <SmallBox name={"OKRs"} icon={<FaGgCircle className="text-orange-500 text-5xl" />} />
               <SmallBox name={"Meeting Notes"} icon={<FaNewspaper className="text-yellow-500 text-5xl" />} />
               <SmallBox name={"Vacation Planner"} icon={<FaTicketAlt className="text-red-500 text-5xl" />} />
               <SmallBox name={"Editorial Calendar"} icon={<FaCalendarDay className="text-blue-500 text-5xl" />} />
               <SmallBox name={"Habit Tracker"} icon={<FaCheckCircle className="text-purple-500 text-5xl" />} />
          </div>
      </div>
          
     </>
     )
}

export default EverythingSection
