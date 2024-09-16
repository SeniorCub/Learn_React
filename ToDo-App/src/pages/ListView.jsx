import { useState } from 'react';
import CreateTask from "../components/CreateTask"
import ListsAll from "../components/ListsAll"
import SmallNavbar from "../components/SmallNavbar"
import SmallTopNavbar from "../components/SmallTopNavbar"

const ListView = () => {
     const [isOpen, setIsOpened] = useState(false);
     return (
     <>
          <div className="relative">
               <SmallTopNavbar />
               <SmallNavbar/>
               <ListsAll />
               <button className="mb-36 px-3 bg-white"  onClick={()=>setIsOpened(!isOpen)} >Click me</button>
               <CreateTask className={isOpen?`block`:`hidden`} />
          </div>
     </>
     )
}

export default ListView
