
// eslint-disable-next-line react/prop-types
const SmallImgBox = ({key, image, title, description, style1, style2}) => {
     return (
     <>
          <div key={key} className="flex md:flex-col justify-start md:items-start items-center p-1">
               <div className="h-16 md:h-20 mb-2">
                    <img src={image} alt="image" />
               </div>
               <div>
                    <h3 className={`md:text-xl text-sm font-bold ${style1}`}>{title}</h3>
                    <p className={`par ${style2} text-xs`}>{description}</p>
               </div>
          </div>
     </>
     )
}

export default SmallImgBox
