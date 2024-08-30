/* eslint-disable react/prop-types */


const EachFaq = (props) => {
     return (
          <div>
               <div className="w-full p-5 bg-gray-600 text-2xl font-bold">{props.question}</div>
               <div className="w-full bg-gray-600 mt-[0.15rem] p-5">{props.answer}</div>
          </div>
     )
}

export default EachFaq
