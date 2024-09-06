import { useState } from "react"


const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [users, setUser] = useState([]);

     const handleSubmit = (e) => {
          console.log(e.target.value);
          setEmail(e.target.value)
     }
     return (
     <>
          <div className='h-screen flex justify-center items-center px-32 bg-slate-200'>
              <div className="flex flex-col justify-start items-start">
                    <h1 className='basis-2/3 font-extrabold text-5xl text-blue-600'>Facebook</h1>
                    <p className='ml-5 text-2xl w-2/3'>Facebook helps you connect and share with the people in your life.</p>
              </div>
               <form className='basis-1/3 p-10 bg-white rounded-lg shadow-md'>
                    <div className='mb-6'>
                         <input type="email" className='w-full p-3 mt-1 border border-gray-300 rounded-md' placeholder='Email address' onChange={(e)=>handleSubmit(e)} />
                         <div>{email}</div>
                    </div>
                    <div className='mb-6'>
                         <input type="password" className='w-full p-3 mt-1 border border-gray-300 rounded-md' placeholder='Password'/>
                    </div>
                    <button className='w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md'>Log in</button>
               </form>
          </div> 
     </>
     )
}

export default Login
