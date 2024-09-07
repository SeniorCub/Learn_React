import { useState } from 'react';

// Reusable DropdownMenu Component
// eslint-disable-next-line react/prop-types
const DropdownMenu = ({ menuItems = [], menuClassName = 'dropdown-menu' }) => {
     return (
     <div className={menuClassName}>
          <ul>
               {menuItems.map((item, index) => (
                    <li key={index}>{item}</li>
               ))}
          </ul>
     </div>
     );
};

// Dropdown Component that handles visibility and interactions
// eslint-disable-next-line react/prop-types
const Dropdown = ({ buttonLabel = 'Dropdown Menu', menuItems = [] }) => {
     const [isDropdownVisible, setDropdownVisible] = useState(false);

     const handleMouseEnter = () => setDropdownVisible(true);
     const handleMouseLeave = () => setDropdownVisible(false);

     return (
     <div className="w-max" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="flex justify-center items-center gap-2 font-medium hover:bg-gray p-2">{buttonLabel} <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={isDropdownVisible?`size-3 `:`size-3 rotate-45`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></span> </button>
          {isDropdownVisible && <DropdownMenu menuItems={menuItems} />}
     </div>
     );
};

export default Dropdown;
