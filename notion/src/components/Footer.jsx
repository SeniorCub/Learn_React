import Logo from "./Logo"
import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa6"

// eslint-disable-next-line react/prop-types
export const Link = ({name, links}) => {
     return (
     <>
          <div className="space-y-2">
               <h1 className="font-bold">{name}</h1>
               <ul className="space-y-2">
                  {
                    // eslint-disable-next-line react/prop-types
                    links.map((link, index) => (
                         <li key={index}>{link}</li>
                    ))
                  }
               </ul>
          </div>
     </>
     )
}

const Footer = () => {
     const link1 = {
          "name": "Company",
          "links": ["About us", "Careers", "Security", "Status", "Terms & privacy"]
     }
     const link2 = {
          "name": "Download",
          "links": ["iOS & Android", "Mac & Windows", "Calendar", "Web Clipper"]
     }
     const link3 = {
          "name": "Resources",
          "links": ["Help center", "Pricing", "Blog", "Community", "Integrations", "Templates", "Affiliates"]
     }
     const link4 = {
          "name": "Notion for",
          "links": ["Enterprise", "Small business", "Personal"]
     }
     return (
     <>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 container py-24">
               <div className="flex flex-col space-y-2 justify-start items-start">
                    <Logo />
                    <div className="flex gap-5 text-xl w-full text-[#333]/80">
                         <FaInstagram />
                         <FaXTwitter />
                         <FaLinkedin />
                         <FaFacebook />
                         <FaYoutube />
                    </div>
                    <a href="#" className="text-[#333]/90 text-sm">Do Not Sell or Share My Info</a>
                    <a href="#" className="text-[#333]/90 text-sm">Cookie settings</a>
                    <h3>© 2024 Notion Labs, Inc.</h3>
               </div>
               <Link links={link1.links} name={link1.name} />
               <Link links={link2.links} name={link2.name} />
               <Link links={link3.links} name={link3.name} />
               <div>
                    <Link links={link4.links} name={link4.name} />
                    <a href="#" className="flex justify-start items-center text-black font-bold gap-1 mt-10">
                         Explor more
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                         </svg>
                    </a>
               </div>
          </div>
     </>
     )
}

export default Footer
