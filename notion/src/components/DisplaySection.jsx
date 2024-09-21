import { useState, useEffect, useMemo } from "react";
import Button from "./Button";
import wiki1 from "../assets/images/wiki.png";
import wiki2 from "../assets/images/bookFlat.png";
import docs1 from "../assets/images/docs.png";
import docs2 from "../assets/images/gdocs.svg";
import project1 from "../assets/images/projects.png";
import project2 from "../assets/images/target.png";
import ai1 from "../assets/images/ai.png";
import ai2 from "../assets/images/sparkle.png";
import calender1 from "../assets/images/calendar.png";
import calender2 from "../assets/cal.svg";
import site1 from "../assets/images/sites.png";
import site2 from "../assets/images/globe.png";

const DisplaySection = () => {
     const [img, setImg] = useState(wiki1);
     const [activeIndex, setActiveIndex] = useState(0); // To keep track of the current image index

     const images = useMemo(() => [wiki1, docs1, project1, ai1, calender1, site1], []);
     const icons = useMemo(() => [wiki2, docs2, project2, ai2, calender2, site2], []);
     const names = useMemo(() => ["Wikis", "Docs", "Projects", "AI", "Calendar", "Sites"], []);

     useEffect(() => {
     setImg(images[0]); // Set the first image initially

     const interval = setInterval(() => {
          setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          setImg(images[nextIndex]); // Update the image source
          return nextIndex;
          });
     }, 5000);

     return () => clearInterval(interval); // Clear interval on component unmount
     }, [images]);

     return (
     <div className="container space-y-5 my-5">
          <div className="flex justify-center items-center gap-3 flex-wrap">
               {images.map((_, index) => (
                    <Button key={index} icons={icons[index]} style={`h-10 w-max font-bold flex border flex-row-reverse gap-2 ${index === activeIndex ? "bg-gray border-gray" : "border-slate-300"}`} name={names[index]} />
               ))}
          </div>
          <div className="h-[50vh] md:h-[90vh] w-full">
               <img src={img} alt="Carousel" className="object-cover md:object-contain w-full h-full" />
          </div>
     </div>
     );
};

export default DisplaySection;
