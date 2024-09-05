import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import HeroSection from './components/HeroSection'
import Reason from './components/Reason'
import Trending from './components/Trending'
import Faqs from './components/Faqs'
import Apiclass from './components/Apiclass'

function App() {
     const [students, setStudents] = useState(['bami', 'favour', 'dhorn'])
     const handleState = (message) =>{
          alert(`You clicked on ${message} button`)
     }
     const list = [
          {names: 'click me',styles: 'bg-green-600 text-white'},
          {names: 'Log In', styles: 'bg-blue-600 text-white'},
          {names: 'Register', styles: 'bg-red-600 text-white'},
          {names: 'Reuben', styles: 'bg-black text-red-600'},
     ]
     return (
          <>   
               <HeroSection/>
               <Trending/>
               <Reason/>
               <div>
                    <Button name={'Log In'} style={'bg-neutral-700 text-red-600'} />
                    <Button name={'Codify'} style={'bg-black text-white'} />
               </div>
               <div>{students}</div>
               {
                    list.map((btnn, index) => (
                         <Button key={index} action={()=>setStudents([...students,btnn.names])} name={btnn.names} style={btnn.styles}/>
                    ))
               }
               <Faqs />
               <Apiclass />
          </>
     )
}

export default App
