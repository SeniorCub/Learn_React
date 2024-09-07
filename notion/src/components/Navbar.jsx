import Dropdown from './DropdownMenu';

const Navbar = () => {
     const product = ['AI', 'Docs', 'Wikis', 'Projects', 'Calender', 'Sites', 'Templates'];
     return (
     <>
          <nav>
               <div></div> 
               <Dropdown buttonLabel="Product" menuItems={product} />
          </nav>  
     </>
     )
}

export default Navbar
