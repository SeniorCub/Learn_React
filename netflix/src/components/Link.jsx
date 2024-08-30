/* eslint-disable react/prop-types */

const Link = (props) => {
     return (
          <>
               <a className={`underline underline-offset-2 ${props.style}`} href={props.link}>{props.name}</a>
          </>
     )
}

export default Link
