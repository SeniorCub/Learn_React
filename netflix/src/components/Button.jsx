/* eslint-disable react/prop-types */

const Button = (props)=>{

     return (
          <button className={`btn ${props.style}`} onClick={props.action}>
               <span>{props.name}</span>{props.icon}
          </button>
     )
}

export default Button