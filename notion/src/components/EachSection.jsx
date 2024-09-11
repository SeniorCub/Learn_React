import Button from "./Button"
import todo from "../assets/images/checklist.png"
import img from "../assets/images/plan-v5.png"

const EachSection = () => {
     return (
     <>
          <div className="container my-16">
               <Button name={"Plan"} style={"bg-gray2 text-lg font-semibold sec"} />
               <div className="flex items-center text-base font-bold">
                    <div className="basis-2/5 text-xl space-y-3">
                         <h1 className="text-6xl font-bold">Your workflow. Your way.</h1>
                         <p className="par">There’s a lot to keep track of. Notion’s flexible pages allow you to design your ideal workflow and view it by timeline, task, team, or level of doneness.</p>
                         <a href="#" className="flex justify-start items-center text-primary gap-1">Explore projects <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></a>
                    </div>
                    <div className="basis-3/5 grid grid-cols-3">
                         <div className="flex flex-col justify-start items-start">
                              <div className="h-20 mb-2"><img src={todo} alt="" /></div>
                              <h3 className="text-xl font-bold">Tasks and to-dos</h3>
                              <p className="par">Tackle any project, big or small.</p>
                         </div>
                         <div className="flex flex-col justify-start items-start">
                              <div className="h-20 mb-2"><img src={todo} alt="" /></div>
                              <h3 className="text-xl font-bold">Tasks and to-dos</h3>
                              <p className="par">Tackle any project, big or small.</p>
                         </div>
                         <div className="flex flex-col justify-start items-start">
                              <div className="h-20 mb-2"><img src={todo} alt="" /></div>
                              <h3 className="text-xl font-bold">Tasks and to-dos</h3>
                              <p className="par">Tackle any project, big or small.</p>
                         </div>
                    </div>
               </div>
               <div className="h-[90vh] mt-5 w-full rounded-[1.5rem] overflow-hidden">
                    <img src={img} alt="Carousel" className="object-contain w-full h-full" />
               </div>
          </div>    
     </>
     )
}

export default EachSection
