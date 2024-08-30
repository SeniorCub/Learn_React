import Button from "./Button"

const Subscribe = () => {
     return (
          <>
               <div className="bg-black text-white py-10">
                    <div className="container space-y-5 text-center">
                         <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                         <div className='flex flex-col md:flex-row items-center gap-3 w-[50vw] mx-auto'>
                              <input type="email" className='h-12 w-full md:basis-2/3 py-2 bg-black/60 border border-slate-600 rounded px-2' placeholder='Email Address'/>
                              <Button name={'Get Started'} style={'h-12 btn bg-red-700 text-white basis-1/3 flex items-center justify-center gap-3 font-extrabold'} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 "><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>} />
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Subscribe
