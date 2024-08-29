/* eslint-disable react/prop-types */
import './button.modules.css'

const Button = (props)=>{

     return (
          <button className={`btn ${props.style}`} onClick={props.action}>
               {props.name}
          </button>
     )
}

export default Button