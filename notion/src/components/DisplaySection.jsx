import Button from "./Button"
import wiki1 from "../assets/images/wiki.png"
import wiki2 from "../assets/images/bookFlat.png"
import docs1 from "../assets/images/docs.png"
import docs2 from "../assets/images/gdocs.svg"
import project1 from "../assets/images/projects.png"
import project2 from "../assets/images/target.png"
import ai1 from "../assets/images/ai.png"
import ai2 from "../assets/images/sparkle.png"
import calender1 from "../assets/images/calendar.png"
import calender2 from "../assets/cal.svg"
import site1 from "../assets/images/sites.png"
import site2 from "../assets/images/globe.png"

const DisplaySection = () => {

     return (
     <>
          <div className="container space-y-5 my-5">
               <div className="flex justify-center items-center gap-3">
                    <Button icons={wiki2} style={'h-10 w-max font-bold flex border flex-row-reverse gap-2 bg-gray border-gray'} name={"Wikis"} />
                    <Button icons={docs2} style={'h-10 w-max font-bold flex border border-slate-300 flex-row-reverse gap-2'} name={"Docs"} />
                    <Button icons={project2} style={'h-10 w-max font-bold flex border border-slate-300 flex-row-reverse gap-2'} name={"Projects"} />
                    <Button icons={ai2} style={'h-10 w-max font-bold flex border border-slate-300 flex-row-reverse gap-2'} name={"AI"} />
                    <Button icons={calender2} style={'h-10 w-max font-bold flex border border-slate-300 flex-row-reverse gap-2'} name={"Calender"} />
                    <Button icons={site2} style={'h-10 w-max font-bold flex border border-slate-300 flex-row-reverse gap-2'} name={"Sites"} />
               </div>
               <div className="h-[90vh] w-full">
                    <img src={wiki1} alt="" className="object-contain"/>
               </div>
          </div>   
     </>
     )
}

export default DisplaySection
