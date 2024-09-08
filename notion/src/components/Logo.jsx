import  Logos from '../assets/images/pngwing2.png';

const Logo = () => {
     return (
     <div>
          <a href='#' className='flex justify-center items-center h-10'>
              <img src={Logos} alt="" />
              <span className='font-bold text-lg'>Notion</span>
          </a>
     </div>
     )
}

export default Logo
