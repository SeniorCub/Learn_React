
const SmallImgBox = (key, image, title, description) => {
     return (
     <>
          <div key={key} className="flex flex-col justify-start items-start">
               <div className="h-20 mb-2">
                    <img src={image} alt="image" />
               </div>
               <h3 className="text-xl font-bold">{title}</h3>
               <p className="par">{description}</p>
          </div>
     </>
     )
}

export default SmallImgBox
