import Dropdown from './DropdownMenu';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
     const product = ['AI', 'Docs', 'Wikis', 'Projects', 'Calender', 'Sites', 'Templates'];
     return (
     <>
          <nav className='flex justify-between items-center p-3 text-sm font-semibold h-[10vh] sticky top-0 border-b border-b-gray z-50 bg-white'>
               <div className="flex justify-center items-center gap-2">
                    <Logo />
                    <div className="hidden justify-center items-center gap-2 md:flex">
                         <Dropdown buttonLabel="Product" menuItems={product} />
                         <Dropdown buttonLabel="Product" menuItems={product} />
                         <Dropdown buttonLabel="Product" menuItems={product} />
                         <Dropdown buttonLabel="Product" menuItems={product} text={"Notion is always at home right in your browser"}/>
                         <a href="/">Pricing</a>
                    </div>
               </div>
               <div className="flex justify-center items-center gap-2">
                    <a href="#" className='md:block hidden hover:bg-gray p-2 rounded-lg'>Request a demo</a>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:block hidden size-6 rotate-90"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg></div>
                    <a href="#" className='md:block hidden hover:bg-gray p-2 rounded-lg'>Log in</a>
                    <Button name={'Get Notion free'} style={'text-white bg-dark hover:bg-dark/85'} />
               </div>
          </nav>  
     </>
     )
}

export default Navbar
