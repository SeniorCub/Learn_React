import Header from "./Header"
import SmallImgBox from "./SmallImgBox"
import img1 from "../assets/images/docsStacked.png"
import img2 from "../assets/images/bookFlat.png"
import img3 from "../assets/images/target.png"
import img4 from "../assets/images/sparkle.png"
import img5 from "../assets/images/notionCalendarLogo.png"
import img6 from "../assets/images/trophy.png"
import img7 from "../assets/images/globe.png"
import img8 from "../assets/images/shapes1.png"
const EverythingSection = () => {
     const sections = [
          {
               image: img1,
               title: "Docs",
               description: "Build any page, communicate any idea."
          },
          {
               image: img2,
               title: "Wiki",
               description: "Store all your knowledge in one home base."
          },
          {
               image: img3,
               title: "Projects",
               description: "Manage any endeavor from beginning to end."
          },
          {
               image: img4,
               title: "Notion AI",
               description: "Instant answers and writing help within your workspace."
          },{
               image: img5,
               title: "Calendar",
               description: "See all your commitments in one place."
          },
          {
               image: img6,
               title: "Goals",
               description: "Set objectives, get organized, and track progress."
          },
          {
               image: img7,
               title: "Sites",
               description: "Make any page a website in minutes."
          },
          {
               image: img8,
               title: "Templates",
               description: "Jump in with one of 10,000+ templates."
          }
          ];
     return (
     <>
      <div className="container my-16">
          <Header title={"Everything you need to do your best work."} style={"md:w-3/5 mb-5"} />
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
              {
                     sections.map((section, index) => (
                         <SmallImgBox  key={index}  image={section.image} title={section.title} description={section.description} style1={'font-3xl font-bold'} style2={'font-2xl font-medium'} />
                    ))
              }
          </div>
      </div>
          
     </>
     )
}

export default EverythingSection
