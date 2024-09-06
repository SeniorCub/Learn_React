/* eslint-disable react/prop-types */
import './button.modules.css'

// Desturcturing
const Button = ({style, action, name, link})=>{

     return (
          <button className={`btn ${style}`} onClick={action}>
               <a href={link}>{name}</a>
          </button>
     )
}

export default Button