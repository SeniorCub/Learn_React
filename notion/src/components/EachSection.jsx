import Button from "./Button";
import Header from "./Header";

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
                         <div key={index} className="flex flex-col justify-start items-start">
                              <div className="h-20 mb-2">
                                   <img src={section.image} alt="image" />
                              </div>
                              <h3 className="text-xl font-bold">{section.title}</h3>
                              <p className="par">{section.description}</p>
                         </div>
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
