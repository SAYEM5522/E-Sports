import axios from 'axios'
import { ErrorMessage, Field, Formik } from 'formik'
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import * as Yup from 'yup';
const validationSchema = Yup.object({
  Password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  NewPassword: Yup.string().required('NewPassword is required').min(6, 'NewPassword must be at least 6 characters'),
  RepeatNewPassword: Yup.string().oneOf([Yup.ref("NewPassword")],"Passward must be match"),
})
const ProfileSequrity = () => {
  const [message,setMessage]=useState<string>()
  const initialValues = {
    Password: '',
    NewPassword: '',
    RepeatNewPassword: '',
  }
 
  const onSubmit = async(values:any, { setSubmitting, resetForm }:any) => {
  const email=Cookies.get("email")
  const data={
    oldPassword:values.Password,
    newPassword:values.NewPassword,
    repeatNewPassword:values.RepeatNewPassword
  }
  await axios.patch(`http://localhost:8081/changePassword/${email}`,data).then((res)=>{
     setMessage(res.data.message)
   }).catch((err)=>{
     setMessage(err.response.data.error)
   })
   
  }

  return (
    <div className='w-full  h-full'>
    <p className='text-white mb-3 ml-5 italic text-lg'>Enter your old password and a new one to change your password.</p>
     {
      message&&<p className='text-red-100 text-center font-bold  italic text-lg'>{message}</p>
     }
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        {({values, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <div className='grid place-items-center w-full h-full'>
              <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-white font-medium font-serif pl-1'>
              Old Password
              </label>
              <Field className="outline-none h-9 p-2 bg-[#15141B] rounded-md placeholder-shown:p-2 text-white" name="Password" type="text" placeholder="Enter Old Password.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Password" component="div" />
              </div>
              <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
            
              <label className='text-white font-medium font-serif pl-1'>
              New Password
              </label>
              <Field className="outline-none h-9 p-2 bg-[#15141B]  rounded-md placeholder-shown:p-2 text-white" name="NewPassword" type="text" placeholder="Enter New Password.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="NewPassword" component="div" />
              </div>
              <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-white font-medium font-serif pl-1'>
              Repeat New Password
              </label>
              <Field className="outline-none bg-[#15141B]  h-9 p-2 rounded-md placeholder-shown:p-2 text-white" name="RepeatNewPassword" type="text" placeholder="Repeat Your New Password.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="RepeatNewPassword" component="div" />
              </div>
            </div>
            <div className='h-full grid place-items-center mt-5'>
              <button 
                type="submit"
                className='h-9  w-[370px] mt-1 mb-3 font-serif font-[600]  bg-[#B6FF40] rounded-md ' 
                // disabled={isSubmitting}
              >
                Change Password
              </button>
            </div>
          </form>
        )}
        </Formik>
    </div>
  )
}

export default ProfileSequrity