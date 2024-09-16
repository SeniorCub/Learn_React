import { useState } from 'react';

const CreateTask = () => {
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
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Task created:', task);
          // Here you can add the logic to save the task
          setTask({
            title: '',
            description: '',
            date: '',
            time: '',
            completed: false,
          });
        };      
     return (
     <>
          <div className="absolute top-[10vh] p-4 bg-white shadow-md rounded-lg w-96 left-3" >
          <h1 className="text-center text-2xl font-bold">Create Task</h1>
          <form onSubmit={handleSubmit} >
               <div className="flex w-full py-2 flex-col">
                    <div className="">
                    <input type="checkbox" name="completed" checked={task.completed} onChange={handleChange} className="checkbox checkbox-success"/>
                         <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Task title" className="w-full font-extrabold text-base p-2 border bg-color3 rounded-lg" required />
                         <textarea name="description" value={task.description} onChange={handleChange} placeholder="Task description" className="w-full font-light text-sm p-2 mt-2 border bg-color3 rounded-lg" required />
                    </div>

                    <div className="flex h-10 justify-center items-center text-sm">
                         <input type="time" name="time" value={task.time} onChange={handleChange} className="w-full font-bold p-2 border bg-color3 rounded-lg h-10" required />
                         <input type="date" name="date" value={task.date} onChange={handleChange} className="w-full font-extralight text-xs p-2 border bg-color3 rounded-lg h-10" required />
                    </div>
               </div>
      
               <button type="submit" className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">Add Task</button>
          </form>
          </div>
     </>
     )
}

export default CreateTask
