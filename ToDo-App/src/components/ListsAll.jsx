import { useState } from 'react';

const ListsAll = () => {
     const [task, setTask] = useState({
          title: '',
          description: '',
          date: '',
          time: '',
          completed: false,
        });
     const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          setTask({
            ...task,
            [name]: type === 'checkbox' ? checked : value,
          });
        };
        
     return (
     <>
          <div>
               {/* Current */}
               <div className="w-full h-96 mt-[10vh]">
                    <h1></h1>
                    <div className="flex w-full py-2">
                         <div className="basis-1/6 flex justify-center items-center">
                         <input type="checkbox" name="completed" checked={task.completed} onChange={handleChange} className="checkbox checkbox-success"/>
                         </div>
                         <div className="basis-4/6">
                              <h2 className="font-extrabold text-base">Meeting with the CEO of BuggyBillions</h2>
                              <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eos?</p>
                         </div>
                         <div className="basis-1/6 text-sm">
                              <p className="font-bold">10:00 AM</p>
                              <p className="font-extralight text-xs">01-01-2022</p>
                         </div>
                    </div>
               </div>
               <hr className="mx-2 bg-color5" />
               {/* Overdue */}
               <div className="w-full h-96">
                    <div>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-warning" />
                    </div>
               </div>
               
               {/* Completed */}
               <div className="w-full h-96 bg-color5">
                    <div>
                    <input type="checkbox" checked className="checkbox checkbox-error" />
                    </div>
               </div>
          </div>  
     </>
     )
}

export default ListsAll
