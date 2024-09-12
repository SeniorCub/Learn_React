
// eslint-disable-next-line react/prop-types
const Header = ({title, description, linkText, style}) => {
     return (
     <>
          <div className={`basis-2/5 text-xl space-y-3 ${style}`}>
               <h1 className="text-6xl font-bold">{title}</h1>
               <p className="par">{description}</p>

               <a href="#" className="flex justify-start items-center text-primary gap-1">
                    {linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
               </a>
          </div>
     </>
     )
}

export default Header
