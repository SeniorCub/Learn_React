import Header from "./Header"
import img1 from "../assets/images/notion-app.png"
import img2 from "../assets/images/notion-calendar.png"
import GetCard from "./GetCard"


const GetStarted = () => {
     return (
     <>
          <div className="container my-16">
               <Header title={"Get started."} style={"w-3/5 mb-5"} />
               <div className="flex gap-5 flex-wrap">
                   <GetCard name={"Notion"} image={img1} />
                   <GetCard name={"Notion Calender"} image={img2} />
               </div>
          </div>
     </>
     )
}

export default GetStarted
