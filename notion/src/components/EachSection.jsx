import Button from "./Button";
import Header from "./Header";
import SmallImgBox from "./SmallImgBox";

// eslint-disable-next-line react/prop-types
const EachSection = ({buttonName, buttonStyle, title, description, linkText, sections, imageSrc }) => {
     return (
     <div className="container my-16">
          <Button name={buttonName} style={`bg-gray2 text-lg font-semibold sec ${buttonStyle}`} />
          <div className="flex items-center text-base font-bold">
              <Header title={title} description={description} linkText={linkText} />

               <div className="basis-3/5 grid grid-cols-3 p-3 gap-3">
                    {
                    // eslint-disable-next-line react/prop-types
                    sections.map((section, index) => (
                         <SmallImgBox  key={index}  image={section.image} title={section.title} description={section.description} />
                    ))}
               </div>
          </div>
          <div className="h-[90vh] mt-5 w-full rounded-[1.5rem] overflow-hidden">
               <img src={imageSrc} alt="images" className="object-contain w-full h-full" />
          </div>
     </div>
     );
};

export default EachSection;
