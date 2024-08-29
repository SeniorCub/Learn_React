import Tv from '../assets/Tv.jsx';
import Down from '../assets/Down.jsx';
import Telescope from '../assets/Telescope.jsx';
import Profile from '../assets/Profile.jsx';

const Reason = () => {
     const reasonCard = {
          background: `linear-gradient(149deg, #192247 0%, #210e17 96.86%)`,
     }
     return (
          <>
               <div className="bg-black text-white py-10">
                    <div className="container space-y-5">
                         <h2 className="font-bold text-2xl">More Reasons to Join</h2>
                         <div className='flex space-x-5'>
                              <div className='relative basis-1/4 p-5 rounded-2xl h-64' style={reasonCard}>
                                   <h3 className='font-bold text-2xl'>Enjoy on your TV</h3>
                                   <p className='text-gray-400'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                                   <div className='absolute bottom-5 right-5'><Tv/></div>
                              </div>
                              <div className='relative basis-1/4 p-5 rounded-2xl h-64' style={reasonCard}>
                                   <h3 className='font-bold text-2xl'>Download your shows to watch offline</h3>
                                   <p className='text-gray-400'>Save your favorites easily and always have something to watch.</p>
                                   <div className='absolute bottom-5 right-5'><Down/></div>
                              </div>
                              <div className='relative basis-1/4 p-5 rounded-2xl h-64' style={reasonCard}>
                                   <h3 className='font-bold text-2xl'>Watch everywhere</h3>
                                   <p className='text-gray-400'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                                   <div className='absolute bottom-5 right-5'><Telescope/></div>
                              </div>
                              <div className='relative basis-1/4 p-5 rounded-2xl h-64' style={reasonCard}>
                                   <h3 className='font-bold text-2xl'>Create profiles for kids</h3>
                                   <p className='text-gray-400'>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                                   <div className='absolute bottom-5 right-5'><Profile/></div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Reason