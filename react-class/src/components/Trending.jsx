import netflix02 from '../assets/images/netflix02.webp'
import netflix03 from '../assets/images/netflix03.webp'
import netflix04 from '../assets/images/netflix04.webp'
import netflix05 from '../assets/images/netflix05.webp'
import netflix06 from '../assets/images/netflix06.webp'
import netflix07 from '../assets/images/netflix07.webp'
import netflix08 from '../assets/images/netflix08.webp'
import netflix09 from '../assets/images/netflix09.webp'
import netflix10 from '../assets/images/netflix10.webp'
import netflix11 from '../assets/images/netflix11.webp'
import EachMovie from './EachMovie'

const Trending = () => {
     const trendingMovies = [
          {id:1, title: '1', image: netflix02},
          {id:2, title: '2', image: netflix03},
          {id:3, title: '3', image: netflix04},
          {id:4, title: '4', image: netflix05},
          {id:5, title: '5', image: netflix06},
          {id:6, title: '6', image: netflix07},
          {id:7, title: '7', image: netflix08},
          {id:8, title: '8', image: netflix09},
          {id:9, title: '9', image: netflix10},
          {id:10, title: '10', image: netflix11},
     ]
     return (
          <>
               <div className="bg-black text-white py-10">
                    <div className="container space-y-5">
                         <h2 className="font-bold text-2xl">Trending Now</h2>
                         <div className="flex gap-4">
                              <select name="country" id="country" className="bg-black h-9 border rounded">
                                   <option value="nigeria">Nigeria</option>
                                   <option value="us">United States</option>
                                   <option value="uk">United Kingdom</option>
                                   <option value="india">India</option>
                              </select>
                              <select name="category" id="category" className="bg-black h-9 border rounded">
                                   <option value="all">All</option>
                                   <option value="movie">Movies</option>
                                   <option value="tv">TV Shows</option>
                                   <option value="music">Music</option>
                                   <option value="documentary">Documentary</option>
                              </select>
                         </div>
                         <div className='w-[85vw] mx-auto overflow-x-scroll main'>
                              <div className='w-max mx-auto px-10 py-2 flex gap-20'>
                                   {
                                        trendingMovies.map((movie, index) => (
                                             <EachMovie key={index} num={movie.id} src={movie.image} />
                                        ))
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Trending