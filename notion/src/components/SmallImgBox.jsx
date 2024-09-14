
// eslint-disable-next-line react/prop-types
const SmallImgBox = ({key, image, title, description, style1, style2}) => {
     return (
     <>
          <div key={key} className="flex flex-col justify-start items-start">
               <div className="h-20 mb-2">
                    <img src={image} alt="image" />
               </div>
               <h3 className={`text-xl font-bold ${style1}`}>{title}</h3>
               <p className={`par ${style2}`}>{description}</p>
          </div>
     </>
     )
}

export default SmallImgBox
