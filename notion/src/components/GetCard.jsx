import Button from "./Button"

// eslint-disable-next-line react/prop-types
const GetCard = ({name, image}) => {
     return (
     <>
          <div className="bg-gray2 p-5 rounded-lg space-y-5">
               <h1 className="text-4xl font-bold">{name}</h1>
               <div className="flex items-center gap-3 font-bold">
                    <Button name={"Try it free"} style={"bg-primary text-white hover:text-dark hover:bg-slate-400"} />
                    <Button name={"Download now"} style={"bg-white"} />
               </div>
               <div>
                    <img src={image} alt="" className=""/>
               </div>
          </div>  
     </>
     )
}

export default GetCard
