import React from "react";
import { useForm } from "react-hook-form";
import Button from '../Button'
import Input from '../Input'

import Select from "../Select"
import appwriteService from '../../appwrite/congif.js'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


function ProfileForm() {

    const {register, handleSubmit }= useForm()

    const navigate = useNavigate()
    const userData = useSelector((state)=> state.auth.userData)

    const submit = async(data)=>{
        
        const dbProfile = await appwriteService.createProfile({...data, userId: userData.$id})

        if(dbProfile){
            navigate('/home')
        }
    }


  return (
    <form onSubmit={handleSubmit(submit)} 
    className="flex flex-wrap">
        <div className="w-2/3 px-2">
        <Input
        label = 'Name'
        placeholder='Name'
        className ='mb-4'
        {...register("name", {required: true})}
        />
        <Input
        label = 'UserName'
        placeholder='UserName'
        className ='mb-4'
        {...register("userName", {required: true})}
        />
        <Input
        label = 'Bio'
        placeholder='Bio'
        className ='mb-4'
        {...register("bio")}
        />
        <Select
        options = {["Student", "Teacher"]}
        label= 'Tag'
        className="mb-4"
        {...register("tag", {required: true})}
        />
        <Button
        type="submit"
        className="w-full"     
        >
            {"Submit"}
        </Button>

        </div>
    </form>
  )
}

export default ProfileForm