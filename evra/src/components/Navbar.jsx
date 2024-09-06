import SearchNav from "./home/SearchNav"

const Navbar = () => {
     return (
          <>
               <nav className="container flex justify-between py-4">
                    <div className="flex flex-row gap-20 justify-center items-center">
                         <div className="flex flex-row gap-2 font-extrabold">
                              <div className="text-sec">EVRA</div><span className="text-sec text-xs">TM</span>
                         </div>
                         <div className="flex flex-row gap-10 justify-center items-center">
                              <a href="#" className="text-white font-bold">Home</a>
                              <a href="#" className="text-white font-bold">Shop</a>
                              <a href="#" className="text-white font-bold">About</a>
                              <a href="#" className="text-white font-bold">Blogs</a>
                              <select name="lang" id="lang" className="bg-transparent h-9 text-gray-400 border-none outline-none hover:text-white font-medium ">
                                   <option className="bg-pry rounded" value="eng">Quick Links</option>
                                   <option className="bg-pry rounded" value="eng">Trending Prducts</option>
                                   <option className="bg-pry rounded" value="eng">Best Selling</option>
                                   <option className="bg-pry rounded" value="eng">Top Rated</option>
                              </select>
                         </div>
                    </div>
                    <div className="flex flex-row gap-10 justify-center items-center">
                         <SearchNav />
                         <div className="relative">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6 opacity-60"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                              <div className="bg-sec absolute w-4 h-4 flex justify-center items-center text-xs text-white -top-2 -right-3 rounded-full">4</div>
                         </div>
                    </div>
               </nav> 
          </>
     )
}

export default Navbar
