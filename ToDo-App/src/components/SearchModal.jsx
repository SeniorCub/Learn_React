// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const SearchModal = () => {
     // State to toggle form visibility
     const [isOpen, setIsOpened] = useState(false);
     const [searchItem, setSearch] = useState({
          search : "", 
     });
     const handleSearch = (e) => {
          const { name, value } = e.target;
          setSearch({
               ...searchItem,
               [name]: value,
          });
     };
  return (
    <>
          <div className="bg-color3 w-[30vh] h-[5vh] flex flex-col justify-center items-center -translate-y-5 fixed right-1/2 md:w-[50vw] top-[5vh] transform translate-x-1/2"  onClick={() => setIsOpened(!isOpen)}>
               <label className="input input-bordered flex items-center gap-2 bg-color1 text-white w-full h-full rounded-none">
               <input type="text" className="grow placeholder:text-gray-300" placeholder="Search" onChange={handleSearch} name="search"/>
               </label>
          </div>

          {isOpen && (
               <div className="fixed top-[10vh] mt-2 p-5 bg-color3 shadow-md w-96 transform translate-x-1/2 right-1/2 md:w-[50vw] w-[30vw]">
                    {searchItem.search}
               </div>
          )}
    </>
  );
};

export default SearchModal;