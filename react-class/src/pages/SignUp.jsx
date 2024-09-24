import { useFormik } from "formik";
import * as Yup from 'yup'

const SignUp = () => {
     const formik = useFormik({
          initialValues: {
               first_name: '',
               last_name: '',
               company: '',
               phone: '',
               website: '',
               visitors: '',
               email: '',
               password: '',
          },
          validationSchema: {
               first_name: Yup.string(),
               last_name: Yup.string(),
               company: Yup.string(),
               phone: Yup.string(),
               website: Yup.string(),
               visitors: Yup.number(),
               email: Yup.string.required("Email is required").email("Invalid Email"),
               password: Yup.string().required("Password is required").min(4, "at least 4 characters").max(10, "maximum of 10 characters"),
               confirm_password: Yup.string().required("Password is required").min(4, "at least 4 characters").max(10, "maximum of 10 characters"),
          },
          onSubmit: (values, {resetForm}) => {
               console.log(values)
               resetForm()
          }
     })
     return (
     <>
          <div>
               <form className="bg-slate-600 w-[60vw] p-5 m-auto rounded-3xl">
                    <div className="grid gap-3 mb-6 md:grid-cols-2">
                         <div>
                              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                              <input type="text" id="first_name" name="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gr dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                         </div>
                         <div>
                              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                              <input type="text" id="last_name" name="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gra dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                         </div>
                         <div>
                              <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                              <input type="text" id="company" name="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gr dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                         </div>
                         <div>
                              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                              <input type="tel" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                         </div>
                         <div>
                              <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Website URL </label>
                              <input type="url" id="website"  name="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gr dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
                         </div>
                         <div>  
                              <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">  Unique visitors (per month)  </label>  
                              <input  type="number"  id="visitors" name="visitors"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required
                              />
                         </div>
                    </div>
                    <div className="mb-3">
                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Email address
                         </label>
                         <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gra dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                    <div className="mb-3">
                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                         <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    <div className="mb-3">
                         <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">  Confirm password </label>
                         <input type="password" id="confirm_password" name="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    <div className="flex items-start mb-3">
                         <div className="flex items-center h-5"> 
                              <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-bl dark:ring-offset-gray-800" required />
                         </div>
                         <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> I agree with the{' '} <a href="#" className="text-blue-600 hover:underline dark:text-blue-500"> terms and conditions </a> .
                         </label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-c dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" > Submit </button>
               </form>
          </div>
     </>
     )
}

export default SignUp
