
const SearchNav = () => {
     return (
          <>
               <div className="flex hover:border w-max searchnav hover:rounded-full p-2 justify-center items-center hover:backdrop-blur-md hover:bg-gray-800">
                    <input type="text" placeholder="Search" className="bg-transparent w-0 border-none outline-none text-white text-sm indent-2"/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-400 text-sm"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
               </div>  
          </>
     )
}

export default SearchNav
