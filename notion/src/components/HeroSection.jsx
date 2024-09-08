import Advert from "../components/Advert"
import Navbar from "../components/Navbar"
import hero from "../assets/images/hero-illo.png"
import Button from "./Button"
import toyota from "../assets/images/toyota.svg"
import figma from "../assets/images/figma.svg"
import spotify from "../assets/images/spotify.png"
import discord from "../assets/images/discord.svg"

const HeroSection = () => {
     return (
     <>
          <Advert />
          <Navbar />
          <div className="flex h-[70vh] container items-end justify-center">
               <div className="basis-1/2 flex flex-col gap-10">
                    <div className="basis-2/3 space-y-5">
                         <h1 className="text-7xl font-bold text-dark">Work feels better here.</h1>
                         <h3 className="text-2xl font-medium w-4/5">Write, plan, and organize in Notion, the AI-powered workspace for every team.</h3>
                         <div className="space-x-3">
                              <Button name={'Get Notion free'} style={'text-white font-bold bg-primary hover:bg-blue-700'} />
                              <Button name={'Request a demo'} style={'text-primary font-bold bg-primary/10 hover:bg-primary/20'} />
                         </div>
                    </div>
                    <div className="basis-1/3">
                         <h5 className="text-slate-400 font-medium text-base">Trusted by teams at</h5>
                         <div className="flex justify-start items-center">
                              <Button icons={toyota} style={'h-14 w-32'} />
                              <Button icons={figma} style={'h-14 w-32'} />
                              <Button icons={spotify} style={'h-14 w-32'}/>
                              <Button icons={discord} style={'h-14 w-32'} />
                         </div>
                    </div>
               </div>
               <div className="basis-1/2"><img src={hero} alt="" /></div>
          </div>
     </>
     )
}

export default HeroSection
