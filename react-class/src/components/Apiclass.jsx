import axios from "axios"
import { useEffect, useState } from "react"

const Apiclass = () => {
     const [user, setUser] = useState([])
     const [loading, setLoading] = useState(true)                   
     let url = "https://jsonplaceholder.org/users"
     useEffect(()=> {
          const fetchApi = async() =>{
               try {
                    const res = await axios.get(url)
                    setUser(res.data);
                    setLoading(false)
                    console.log(res.data);
               } catch (err) {
                    console.log(err);
               }
          }
          fetchApi()
     }, [])
     return (
          <>
          {
               loading ?
               <div className="bg-slate-400 text-center p-5 text-5xl">Loading...</div> : 
               <>
                    <h1>API</h1>
                    <button className="btn bg-green-400">Fetch API</button>
                    <div className="grid grid-cols-4 gap-5 p-10">
                         {
                              user.map(({firstname, lastname, email, phone, website, address}, index)=>(
                                   <div  className="p-5 shadow-lg bg-gray-100 rounded-lg hover:bg-slate-400" key={index}>
                                        <p className="font-bold border-b-2 border-black">{firstname} {lastname}</p>
                                        <p>email: {email}</p>
                                        <p>{phone}</p>
                                        <p>{website}</p>
                                        <p>{address.suite},{address.street},{address.city}</p>
                                   </div>
                              ))
                         }
                    </div>
               </>
          }
          </>
     )
}

export default Apiclass
