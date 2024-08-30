import Link from "./Link"

const Footer = () => {
     const links = [
          { title: "FAQ", url: "#" },
          { title: "Help Center", url: "#" },
          { title: "Account", url: "#" },
          { title: "Media Center", url: "#" },
          { title: "Investor Relations", url: "#" },
          { title: "Jobs", url: "#" },
          { title: "Ways to Watch", url: "#" },
          { title: "Terms of Use", url: "#" },
          { title: "Privacy", url: "#" },
          { title: "Cookie Preferences", url: "#" },
          { title: "Corporate Information", url: "#" },
          { title: "Contact Us", url: "#" },
          { title: "Speed Test", url: "#" },
          { title: "Legal Notices", url: "#" },
          { title: "Only on Netflix", url: "#" },
     ]
     return (
          <>
               <div className="bg-black text-white py-10">
                    <div className="container space-y-10 ">
                         <Link name={'Questions? Contact us.'} link={'https://seniorcub.netlify.app'} />
                         <div className="grid grid-cols-3 space-y-3 text-gray-400 font-normal text-sm">
                              {
                                   links.map((link, index)=>(
                                        <Link key={index} name={link.title} link={link.url} style={'w-[33vw]'}/>
                                   ))
                              }
                         </div>
                         <select name="lang" id="lang" className="bg-black h-9 border rounded">
                              <option value="eng">English</option>
                         </select>
                         <div className="text-gray-400 font-normal text-sm">Netflix Nigeria</div>
                    </div>
               </div>
          </>
     )
}

export default Footer
