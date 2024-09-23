// import { useState } from "react"
import { useFormik } from "formik";
import * as Yup from 'yup'

const Login = () => {
     const formik = useFormik({
          initialValues : {
               firstName: '',
               lastName: '',
               email: '',
               password: '',
          },
          validationSchema: Yup.object({
               firstName: Yup.string(),
               lastName: Yup.string(),
               email: Yup.string().required("Email is required").email("Invalid Email"),
               password: Yup.string().required("Password is required").min(4, "at least 4 characters").max(10, "maximum of 10 characters"),
          }),
          onSubmit: (values, {resetForm})=>{
               console.log(values)
               resetForm()
          }
     }
     )
     return (
     <>
          <div className='h-screen flex justify-center items-center md:px-32 bg-slate-200 flex-wrap'>
              <div className="flex flex-col justify-start items-start">
                    <h1 className='basis-2/3 font-extrabold text-5xl text-blue-600'>Facebook</h1>
                    <p className='ml-5 text-2xl w-2/3'>Facebook helps you connect and share with the people in your life.</p>
              </div>
               <form className='md:basis-1/3 p-10 bg-white rounded-lg shadow-md w-full' onSubmit={formik.handleSubmit}>
                    <div className='mb-6'>
                         <input type="text" className='w-full p-3 mt-1 border border-gray-300 rounded-md'  name="firstName" placeholder='First Name' onChange={formik.handleChange} value={formik.values.firstName} />
                    </div>
                    <div className='mb-6'>
                         <input type="text" className='w-full p-3 mt-1 border border-gray-300 rounded-md'  name="lastName" placeholder='Last Name' onChange={formik.handleChange} value={formik.values.lastName}/>
                    </div>
                    <div className='mb-6'>
                         <input type="email" className='w-full p-3 mt-1 border border-gray-300 rounded-md'  name="email" placeholder='Email address' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                    </div>
                    <div className='mb-6'>
                         <input type="password" className='w-full p-3 mt-1 border border-gray-300 rounded-md' name="password" placeholder='Password' onChange={formik.handleChange} value={formik.values.password}/>
                    </div>
                    {
                         formik.errors.email && formik.touched.email || formik.errors.password && formik.touched.password ?
                         <p className="text-red-700">{formik.errors.email || formik.errors.password}</p> : null
                    }
                    <button className='w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md' type="submit">Log in</button>
               </form>
          </div> 
     </>
     )
}

export default Login
