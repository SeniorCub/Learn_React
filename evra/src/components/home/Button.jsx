
const Button = ({name, style, icon, action})=>{

     return (
          <button className={`btn capitalize ${style}`} onClick={action}>
               <span>{name}</span>{icon}
          </button>
     )
}

export default Button