import { useState } from 'react';

// Reusable DropdownMenu Component
// eslint-disable-next-line react/prop-types
const DropdownMenu = ({ menuItems = [], menuClassName = 'dropdown-menu', text }) => {
     return (
     <div className={`absolute top-10 bg-white p-5 left-5 pr-10 rounded-lg shadow-lg ${menuClassName}`}>
          <ul className='flex flex-col gap-2'>
               {menuItems.map((item, index) => (
                    <li key={index}>{item}</li>
               ))}
          </ul>
          <div className='text-slate-400 text-xs my-2'>{text}</div>
     </div>
     );
};

// Dropdown Component that handles visibility and interactions
// eslint-disable-next-line react/prop-types
const Dropdown = ({ buttonLabel = 'Dropdown Menu', menuItems = [], text }) => {
     const [isDropdownVisible, setDropdownVisible] = useState(false);

     const handleMouseEnter = () => setDropdownVisible(true);
     const handleMouseLeave = () => setDropdownVisible(false);

     return (
     <div className="w-max relative" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} onClick={handleMouseEnter}>
          <button className="flex justify-center items-center gap-2 font-medium hover:bg-gray p-2 rounded-lg">{buttonLabel} <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={isDropdownVisible?`size-3 rotate-180`:`size-3`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></span> </button>
          {isDropdownVisible && <DropdownMenu menuItems={menuItems} text={text}/>}
     </div>
     );
};

export default Dropdown;
