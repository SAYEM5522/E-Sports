import React, { useCallback, useState } from 'react'
import {BsChevronDown} from "react-icons/bs"
import GameBox from './GameBox'
import InfoBox from './InfoBox'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from './Input'
import Input2 from './Input2'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenSignup, setopenSignup } from '../../feature/userSlice'
const style = {
  position: 'absolute' as 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 2,
  outline: 0,
  height:550,
};
const style2 = {
  position: 'absolute' as 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 2,
  outline: 0,
  height:310,
  
};
const SignupSchema=yup.object({
  Username:yup.string().required("Username is a required field"),
  Email:yup.string().required("Email is a required field").email("Email is not valid!"),
  Passward:yup.string().min(6,"Passward must be at least 6 charecters"),
  ConfirmPassward:yup.string().oneOf([yup.ref("Passward")],"Passward must be match"),
  Country:yup.string().required("Country is a required field")

})
const Header = () => {
 

  const [openGame,setGame]=useState<boolean>(false)
  const [openInfo,setOpenInfo]=useState<boolean>(false)
  const [openLogIn,setOpenLogIn]=useState<boolean>(false)
  // const [openSignUp,setOpenSignUp]=useState<boolean>(false)
  const dispatch=useDispatch()
  const OsignUp=useSelector(selectOpenSignup)

  const router=useRouter()

  const OpenGameBox=useCallback(()=>{
      setGame(!openGame)
  },[openGame])
  const OpenMoreBox=useCallback(()=>{
    setOpenInfo(!openInfo)
},[openInfo])
    const Login=useCallback(()=>{
      setOpenLogIn(true)
    },[openLogIn])
    const Signup=useCallback(()=>{
      // setOpenSignUp(true)
      dispatch(setopenSignup({
        openSignup:true
      }))
    },[OsignUp])
    
    const HonePage=()=>{
      router.push("/")
    }
    const NewsPage=()=>{
      router.push("/News")
    }
   
    const ModelMonitor=useCallback(()=>{
      dispatch(setopenSignup({
        openSignup:false
      }))
      setOpenLogIn(true)
    },[OsignUp,openLogIn])
    const LoginMonitor=useCallback(()=>{
      setOpenLogIn(false)
      dispatch(setopenSignup({
        openSignup:true
      }))
    },[OsignUp,openLogIn])
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(SignupSchema)
    });
    const formData=(data:any)=>{
       console.log(data)
    }
  return (
    <div
    className=' flex  items-center justify-between   h-14 bg-[#1C1B22]'
    >
    <div>
    </div>
    <div className='flex items-center justify-center ml-10' >
  
      <p onClick={HonePage} className='text-white pl-9 font-serif font-medium cursor-pointer'>Home</p>
      <div className='flex items-center cursor-pointer relative' onClick={OpenGameBox}>
          <p className='text-white pl-9 font-serif font-medium'>Games</p>
            <BsChevronDown color='white' className='pl-2 h-6 w-6'/>
            {
              openGame?<GameBox/>:null
            }
          </div>
      <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>Play</p>
      <p onClick={NewsPage} className='text-white pl-9 font-serif font-medium cursor-pointer'>News</p>
      <div className='flex items-center cursor-pointer relative' onClick={OpenMoreBox}>
          <p className='text-white pl-9 font-serif font-medium' >More</p>
            <BsChevronDown color='white' className='pl-2 h-6 w-6'/>
            {
              openInfo?<InfoBox/>:null
            }
          </div>



    </div>
    <div className='flex items-center mr-10'>
     
        <p onClick={Login} className=' text-[#B6FF40] mr-10 font-serif cursor-pointer font-xl'>Login</p>
      <div onClick={Signup} className='h-10 w-20 flex items-center justify-center rounded-md cursor-pointer bg-[#B6FF40]'>
        <p className=' font-serif font-xl'>Signup</p>
      </div>
        <Modal
        open={openLogIn}
        onClose={()=>{setOpenLogIn(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
>
        <Box sx={{...style2,borderRadius:3,zIndex:1}}>
          
          <form className='mt-7'>
          <Input  register={{...register("Email")}}
        label={"Email"} type={"email"} placeholder={"Enter Email.."}
        errorMessage={errors.Email?.message}
        id={"email"}
       />
          <Input   register={{...register("Passward")}}
        label={"Passward"} type={"passward"} placeholder={"Enter Passward.."}
        errorMessage={errors.Passward?.message}
        id={"passward"}
       />
        <div className='flex items-center justify-between'>
        <button className='h-7 mt-3 font-serif font-[600] w-20 bg-[#B6FF40] rounded-md '>Login</button>
        <p className='underline ml-1 mt-2 font-medium cursor-pointer text-white'>Forgot Passward</p>
      
        </div>
        <p className=' ml-1 text-white font-serif font-medium mt-4' >Don't have any account 
          <span onClick={LoginMonitor} className='underline ml-1 font-bold cursor-pointer'>
            Signup
          </span>
        </p>
          </form>
       

        </Box>

</Modal>

        <Modal
        open={OsignUp}
        onClose={()=>{dispatch(setopenSignup({
          openSignup:false
        }))}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
>
        <Box sx={{...style,borderRadius:3}}>
        <div className='pt-8'>
      <form onSubmit={handleSubmit(formData)}>
      <Input
       label={"Username"} 
       register={{...register("Username")}}
       type={"text"} placeholder={"Enter Username.."}
       errorMessage={errors.Username?.message}
       id={'userName'}
       />
      <Input
       register={{...register("Email")}}
       label={"Email"} type={"email"} placeholder={"Enter Email.."}
       errorMessage={errors.Email?.message}
       id={"email"}

       />
      <Input
       register={{...register("Passward")}}
       label={"Passward"} type={"passward"} placeholder={"Enter Passward.."}
       errorMessage={errors.Passward?.message}
       id={"passward"}
       
       />
      <Input
       register={{...register("ConfirmPassward")}}
       label={"Confirm Passward"} type={"passward"} placeholder={"Enter Confirm Passward.."}
       errorMessage={errors.ConfirmPassward?.message}
       id={"confirmPassward"}
       
       />
      <Input 
       register={{...register("Country")}}
      label={"Country"} type={"text"} placeholder={"Enter Country.."}
      errorMessage={errors.Country?.message}
      id={"country"}
      
      />
      <button className='h-9 mt-3 font-serif font-[600] w-full bg-[#B6FF40] rounded-md ' >
      Signup
      </button>
      <p className='mt-2 ml-1 text-white font-serif font-medium'>Already have an account?
        <span onClick={ModelMonitor} className='underline ml-1 font-bold cursor-pointer'> Login</span>
      </p>
      </form>

    </div>
        </Box>

     </Modal>

      
    </div>
    </div>
    
  )
}

export default Header