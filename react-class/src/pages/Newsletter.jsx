import { useFormik } from "formik"
import * as Yup from 'yup'

const Newsletter = () => {
     const formrik = useFormik({
          initialValues: {
               email: '',
               username: '',
          },
          validationSchema: Yup.object({
               email: Yup.string().required("Email is required").email("Invalid Email"),
               username: Yup.string().required("Username is required"), 
          }),
          onSubmit: (values, {resetForm}) => {
               console.log(values),
               resetForm()
          }
     })
     return (
     <>
          <div className="grid md:grid-cols-2 h-[100vh] justify-center items-center bg-green-800 p-5">
               <div className="md:p-5">
                    <h1 className="text-white text-4xl font-bold">Get in Touch</h1>
                    <p className="text-gray-900 ">Have questions or need more information? Our team is ready to assist you. Reach out to us via the form below or contact us directly using the provided information. Your security is our priority.</p>
               </div>
               <div className="md:p-5">
                    <form action="" onSubmit={formrik.handleSubmit}>
                         <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                         <div className="relative mb-6">
                              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                                   <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                   </svg>
                              </div>
                              <input type="email" id="input-group-1" className={formrik.errors.email && formrik.touched.email ? "email focus:ring-red-500 focus:border-red-500" : "email focus:ring-green-500 focus:border-green-500"} placeholder="name@flowbite.com" name="email" onChange={formrik.handleChange} value={formrik.values.email} />
                         </div>
                         <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                         <div className="flex">
                              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                                   <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                   </svg>
                              </span>
                              <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="elonmusk" name="username" onChange={formrik.handleChange} value={formrik.values.username} />
                         </div>
                         <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">We’ll never share your details. Read our <a href="#" className="font-medium text-green-300 hover:underline ">Privacy Policy</a>.</p>
                         <button type="submit" className="text-green-700 bg-gray-300 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-5">Subscribe Now</button>
                    </form>
               </div>
          </div>
     </>
     )
}

export default Newsletter
