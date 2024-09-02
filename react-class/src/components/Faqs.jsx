import { useState } from 'react'

const Faqs = () => {
     const [isOpen, setIsOpened] = useState(false);
  return (
    <div className='container mb-16'>
          <h1 className='text-2xl p-3 text-emerald-950'>FAQ</h1>
          <div>
               <div className='flex justify-between items-center bg-slate-800 px-2 py-5 text-white' onClick={()=>setIsOpened(!isOpen)}>
                    <h2 >Q: What is Netflix?</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={isOpen?`size-6 `:`size-6 rotate-45`}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
               </div>
               <p className={isOpen?`bg-slate-500 py-5 px-2`:`hidden`}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There&apos;s always something new to discover and new TV shows and movies are added every week!</p>
          </div>
    </div>
  )
}

export default Faqs
