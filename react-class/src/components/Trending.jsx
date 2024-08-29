import netflix02 from '../assets/images/netflix02.webp'
// import netflix03 from '../assets/images/netflix03.webp'
// import netflix04 from '../assets/images/netflix04.webp'
// import netflix05 from '../assets/images/netflix05.webp'
// import netflix06 from '../assets/images/netflix06.webp'
// import netflix07 from '../assets/images/netflix07.webp'
// import netflix08 from '../assets/images/netflix08.webp'
// import netflix09 from '../assets/images/netflix09.webp'
// import netflix10 from '../assets/images/netflix10.webp'
// import netflix11 from '../assets/images/netflix11.webp'

const Trending = () => {
     const eachImg = {
          objectFit: 'cover',
          objectPosition: 'center',
     }
     return (
          <>
               <div className="bg-black text-white py-10">
                    <div className="container space-y-5">
                         <h2 className="font-bold text-2xl">Trending Now</h2>
                         <div className="flex gap-4">
                              <select name="country" id="country" className="bg-black border rounded">
                                   <option value="nigeria">Nigeria</option>
                                   <option value="us">United States</option>
                                   <option value="uk">United Kingdom</option>
                                   <option value="india">India</option>
                              </select>
                              <select name="category" id="category" className="bg-black border rounded">
                                   <option value="all">All</option>
                                   <option value="movie">Movies</option>
                                   <option value="tv">TV Shows</option>
                                   <option value="music">Music</option>
                                   <option value="documentary">Documentary</option>
                              </select>
                         </div>
                         <div className='w-[85vw] mx-auto overflow-x-scroll main'>
                              <div className='w-max mx-auto px-10 py-2 flex gap-20'>
                                   <div className='relative'>
                                        <img src={netflix02} alt="" style={eachImg}/>
                                        <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>1</span>
                                   </div>
                                   <div className='relative'>
                                        <img src={netflix02} alt="" style={eachImg}/>
                                        <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>1</span>
                                   </div>
                                   <div className='relative'>
                                        <img src={netflix02} alt="" style={eachImg}/>
                                        <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>1</span>
                                   </div>
                                   <div className='relative'>
                                        <img src={netflix02} alt="" style={eachImg}/>
                                        <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>1</span>
                                   </div>
                                   <div className='relative'>
                                        <img src={netflix02} alt="" style={eachImg}/>
                                        <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>1</span>
                                   </div>
                                   <div className='relative'>
                                        <img src={netflix02} alt="" style={eachImg}/>
                                        <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>1</span>
                                   </div>
                                   <div className='relative'>
                                        <img src={netflix02} alt="" style={eachImg}/>
                                        <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>1</span>
                                   </div>
                                   <div className='relative'>
                                        <img src={netflix02} alt="" style={eachImg}/>
                                        <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>1</span>
                                   </div>
                                   <div className='relative'>
                                        <img src={netflix02} alt="" style={eachImg}/>
                                        <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>1</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Trending
