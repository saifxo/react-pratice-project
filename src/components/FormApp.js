import React from 'react'
 import { useFormik } from 'formik';
 import * as Yup from "yup"
function FormApp() {
    const {handleChange, handleSubmit ,handleBlur, values, errors, touched} =useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''

        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("Feild Cant be Empty"),
            lastname:Yup.string().required("Feild Cant be Empty"),
            email:Yup.string().email("Invalid Email").required("Feild Cant be Empty"),
            password:Yup.string().required("Feild Cant be Empty").matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
              )
        }),
        onSubmit:(values)=>{
            console.log(values)
        }

    })
  return (
    <div>
        <div className='flex items-center justify-center flex-col   '>
        <h1 className=" font-bold text-2xl p-5 font-Edu mt-5 bg-gray-300 text-black rounded-lg shadow-md">
        {"Form  App Using Formik And Yup(Validation)"} 
      </h1>

        <div>
        <form onSubmit={handleSubmit}>
        <input className='mt-5  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black focus:border-2" id="grid-last-name" type="text"' onChange={handleChange} name="firstname" value={values.firstname} onBlur={handleBlur} placeholder='First Name'></input>
        <p className='text-red-600 -mb-4'>{touched.firstname && errors ? errors.firstname : null}</p>
        <input className='mt-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black focus:border-2" id="grid-last-name" type="text"' onChange={handleChange} name="lastname" value={values.lastname} onBlur={handleBlur} placeholder='Last Name'></input>
        <p className='text-red-600 -mb-4'>{touched.lastname && errors ?  errors.lastname : null}</p>
        <input className='mt-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black focus:border-2" id="grid-last-name" type="text"' onChange={handleChange} name="email" value={values.email} onBlur={handleBlur} placeholder='Email'></input>
        <p className='text-red-600 -mb-4'>{touched.email && errors ? errors.email : null}</p>
        <input className='mt-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black focus:border-2" id="grid-last-name" type="text"' onChange={handleChange} type="password" name="password" value={values.password} onBlur={handleBlur} placeholder='Password'></input>
        <p className='text-red-600 -mb-4 w-72'>{touched.password && errors ? errors.password : null}</p>
        <div className='flex justify-center items-center'>
            <button type='submit' className='bg-gray-600 py-2 px-4 hover:scale-110 transition-all ease-out delay-30 rounded-md mt-7 text-white hover:bg-gray-700'>Submit</button>
        </div>
        </form>
        </div>        
      
      </div>
      
     
      


    </div>
  )
}

export default FormApp