/* eslint-disable react/prop-types */

const Button = ({style, action, name, icon, icons})=>{

     return (
          <button className={`btn  ${style}`} onClick={action}>
               <span>{name}</span>{icon}<img src={icons} alt="" />
          </button>
     )
}

export default Button