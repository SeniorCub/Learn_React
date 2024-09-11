import Button from "./Button";

// eslint-disable-next-line react/prop-types
const EachSection = ({buttonName, buttonStyle, title, description, linkText, sections, imageSrc }) => {
     return (
     <div className="container my-16">
          <Button name={buttonName} style={`bg-gray2 text-lg font-semibold sec ${buttonStyle}`} />
          <div className="flex items-center text-base font-bold">
               <div className="basis-2/5 text-xl space-y-3">
                    <h1 className="text-6xl font-bold">{title}</h1>
                    <p className="par">{description}</p>

                    <a href="#" className="flex justify-start items-center text-primary gap-1">
                    {linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </a>
               </div>

               <div className="basis-3/5 grid grid-cols-3">
                    {sections.map((section, index) => (
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
          <div>
               
          </div>
     </div>
     );
};

export default EachSection;
