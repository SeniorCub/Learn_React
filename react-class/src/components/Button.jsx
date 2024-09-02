/* eslint-disable react/prop-types */
import './button.modules.css'

// Desturcturing
const Button = ({style, action, name})=>{

     return (
          <button className={`btn ${style}`} onClick={action}>
               {name}
          </button>
     )
}

export default Button