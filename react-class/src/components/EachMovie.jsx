
const EachMovie = (props) => {
     const eachImg = {
          objectFit: 'cover',
          objectPosition: 'center',
     }
     return (
          <div className='relative w-40'>
               <img src={props.src} alt="" style={eachImg}/>
               <span className='absolute text-9xl bottom-0 font-extrabold -left-10 text-black number'>{props.num}</span>
          </div>
     )
}

export default EachMovie
