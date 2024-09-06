import Navbar from "./Navbar"
import Button from "./home/Button"
import img1 from "../assets/images/evra02.png"
import img2 from "../assets/images/evra03.png"

const HersoSection = () => {
     return (
          <div className=" inconsolata">
               <Navbar />
               <div className="rounded-3xl w-[90vw] overflow-auto min-h-[550px] sm:min-h-[600px] bg-ter backdrop-blur-3xl px-3 mx-auto hero">
                    <div className="w-max flex justify-center items-center">
                         <div className="grid w-[90vw] grid-cols-2">
                              <div className="flex flex-col justify-center font-bold text-gray-100 space-y-8">
                                   <div className="text-2xl">Beats Solo</div>
                                   <div className="text-6xl">Wireless</div>
                                   <div className="text-9xl font-extrabold text-gray-800 opacity-75 tracking-wide">HEADPHONES</div>
                                   <Button name={'shop by category'} style={'btn text-white bg-sec'} />
                              </div>
                              <div className="z-10">
                                   <img src={img1} alt="" className="w-full" />
                              </div>
                         </div>
                         <div className="grid grid-cols-2">
                              <div className="flex flex-col justify-center font-bold text-gray-100 space-y-8">
                                   <div className="text-2xl">Beats Solo</div>
                                   <div className="text-6xl">Wireless</div>
                                   <div className="text-9xl font-extrabold text-gray-800 opacity-75 tracking-wide">VIRTUAL</div>
                                   <Button name={'shop by category'} style={'btn text-white bg-sec'} />
                              </div>
                              <div className="z-10">
                                   <img src={img2} alt="" className="w-full" />
                              </div>
                         </div>
                         <div className="grid grid-cols-2">
                              <div className="flex flex-col justify-center font-bold text-gray-100 space-y-8">
                                   <div className="text-2xl">Beats Solo</div>
                                   <div className="text-6xl">Wireless</div>
                                   <div className="text-9xl font-extrabold text-gray-800 opacity-75 tracking-wide">VIRTUAL</div>
                                   <Button name={'shop by category'} style={'btn text-white bg-sec'} />
                              </div>
                              <div className="z-10">
                                   <img src={img2} alt="" className="w-full" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default HersoSection
