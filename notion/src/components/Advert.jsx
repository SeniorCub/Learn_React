
const Advert = () => {
     return (
     <div className="flex justify-between items-center p-3 bg-gray text-sm">
          <div className="md:block hidden"></div>
          <div className="flex justify-center items-center space-x-1">
               <div className="bg-[#333] font-medium text-white rounded-full px-[7px] py-[2px] w-max">New</div>
               <div>Join us at Make with Notion — a conference for tomorrow’s tools, creators, and ideas.</div>
               <div className="flex justify-center items-center font-bold hover:underline hover:text-primary"><a href="#">Use code MAKE25 for 25% off</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 font-bold"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></div>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </div>
     </div>
     )
}

export default Advert
