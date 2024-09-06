import hero from '../assets/images/hero.jpg'
import logo from '../assets/images/logo.png'

const HeroSection = () => {
     const bgStyle = {
          background: `linear-gradient(#000000aa, #000000aa) ,URL(${hero})`,
     }
     return (
          <div className='h-[70vh] md:h-[90vh] object-cover object-center relative flex items-center justify-center' style={bgStyle}>
               {/* <div className='bg-black absolute inset-0 '></div> */}
               <div className='flex justify-between container items-center absolute top-5'>
                    <img src={logo} alt="" className='w-40'/>
                    <button className='btn text-white bg-red-700'><a href="/login">Sign In</a></button>
               </div>
               <div className='max-w-[650px] text-center text-white font-semibold space-y-3 px-4'>
                    <h1 className='text-3xl md:text-5xl font-extrabold'>Unlimited movies, TV shows, and more</h1>
                    <p>Starts at ₦2,200. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                         <input type="email" className='h-12 w-full md:basis-2/3 py-2 bg-black/60 border border-slate-600 rounded px-2' placeholder='Email Address'/>
                         <button className='h-12 btn bg-red-700 text-white basis-1/3 flex items-center justify-center gap-3'><span>Get Started</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></button>
                    </div>
               </div>
          </div>
     )
}

export default HeroSection