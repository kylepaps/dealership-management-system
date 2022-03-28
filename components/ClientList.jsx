import React, { useState, useEffect } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import fetcher from '../lib/fetcher'
import ClientItem from './ClientItem'
import { useForm } from 'react-hook-form'
import { useSession } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ClientList = () => {
    const { mutate } = useSWRConfig()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [sortType, setSortType] = useState()
    const { data: clientData } = useSWR(`/api/clients/filter/${sortType}`, fetcher)
    const { data: session } = useSession()

    useEffect(() => {
        const sortArray = type => {
          setSortType(type)
          mutate(`/api/clients/filter/${sortType}`)
        }
        sortArray(sortType)
    }, [sortType])
    
    if (!clientData) {
        return <h1>loading...</h1>
    }
    
    const getClientString = JSON.stringify(clientData.clients)
    const getClientJSON = JSON.parse(getClientString)

    
    const onSubmit = async (data) => {
        if (session?.user) {
            const res = await fetch('/api/clients/create', {
                body: JSON.stringify({
                  clients: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    dob: data.dob,
                    contact: data.contact,
                    phone: data.phone,
                    email: data.email
                  }
                }),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            mutate(`/api/clients/filter/${sortType}`)
        } else {
            toast("Sign in to make changes")
        }
    };

    return (
        <div className='flex flex-col w-full justify-between p-4'>
            <ToastContainer/>
            <form className=' bg-white bg-opacity-90 rounded-xl shadow-md w-full min-h-fit' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col'>
                    <h1 className='p-4 font-Poppins font-semibold text-base text-neutral-700'>Create Client</h1>
                        <div className='flex client-form:flex-row flex-col px-4 client-form:space-x-4 justify-between'> 
                            <div className='flex flex-col w-full'>
                                <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>First Name</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                                <input className={errors.firstName?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700 font-Poppins font-light text-sm' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 font-Poppins font-light text-sm'} placeholder={errors.firstName?.type === 'required' ? 'First Name is required' : null} type='text' {...register("firstName", { required: true })}></input>
                            </div>
                            <div className='flex flex-col w-full'>
                                <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Last Name</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                                <input className={errors.lastName?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700 font-Poppins font-light text-sm' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 font-Poppins font-light text-sm'} placeholder={errors.lastName?.type === 'required' ? 'Last Name is required' : null} type='text' {...register("lastName", { required: true })}></input>
                            </div>
                            <div className='flex flex-col w-full'>
                                <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Date of Birth (YYYY-MM-DD)</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                                <input className={errors.dob?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700 font-Poppins font-light text-sm' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 font-Poppins font-light text-sm'} placeholder={errors.dob?.type === 'required' ? 'Date of Birth is required' : null} type='text' {...register("dob", { required: true })}></input>
                            </div>
                        </div> 
                        <div className='flex client-form:flex-row flex-col px-4 client-form:space-x-4 justify-between'> 
                            <div className='flex flex-col w-full'>
                                <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Phone</label></div>                                                                                                        
                                <input className='rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 font-Poppins font-light text-sm' {...register("phone")}></input>
                            </div>
                            <div className='flex flex-col w-full'>
                                <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Email</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                                <input className={errors.email?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700 font-Poppins font-light text-sm' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 font-Poppins font-light text-sm'} placeholder={errors.email?.type === 'required' ? 'Email is required' : null} type='email' {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })}></input>
                            </div>
                            <div className='flex flex-col w-full'>
                            <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Preferred Contact Method</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                                <select className='rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 selection:outline-indigo-500 font-Poppins font-light text-sm' {...register("contact")}>
                                    <option value="EMAIL" className='font-Poppins font-light text-sm'>Email</option>
                                    <option value="PHONE" className='font-Poppins font-light text-sm'>Phone</option>
                                    <option value="BOTH" className='font-Poppins font-light text-sm'>Both</option>
                                </select>
                            </div>
                        </div> 
                    <div className='flex flex-row w-full justify-end p-4'>
                        <button className='w-fit h-fit p-2 rounded-md bg-indigo-500 text-neutral-50 hover:bg-indigo-400 font-Poppins font-light' type='submit'>Create Client</button>
                    </div>
                </div>
            </form>
            <div className='flex flex-col h-full p-4 bg-white bg-opacity-90 my-4 rounded-xl shadow-md'>
                <div className='flex flex-row justify-between'>
                    <h1 className='font-Poppins font-semibold text-base text-neutral-700'>Clients</h1>
                    <div className='flex flex-col'>    
                        <label className='font-Poppins font-medium text-sm text-neutral-600 pl-1'>Filter By</label>
                        <select className='w-44 font-Poppins font-light text-sm rounded-md border-2 focus:outline-indigo-500 active:outline-indigo-500' onChange={(e) => setSortType(e.target.value)}>
                            <option value='firstname' className='font-Poppins font-light text-sm'>First Name</option>
                            <option value='lastname' className='font-Poppins font-light text-sm'>Last Name</option>
                            <option value='contact method' className='font-Poppins font-light text-sm'>Contact Method</option>
                            <option value='phone' className='font-Poppins font-light text-sm'>Phone</option>
                            <option value='email' className='font-Poppins font-light text-sm'>Email</option>
                        </select>
                    </div>
                </div>
           
                <div className='flex flex-row border-b-2 border-indigo-500 border-opacity-50 justify-between items-center pt-4'>
                    <div className='w-full px-4'></div>
                    <h1 className='w-full px-2 font-Poppins font-medium text-neutral-800 text-sm'>Name / DOB</h1>
                    <h1 className='w-full px-2 font-Poppins font-medium text-neutral-800 text-sm'>Email</h1>
                    <h1 className='w-full px-2 font-Poppins font-medium text-neutral-800 text-sm'>Phone</h1>
                    <h1 className='w-full px-2 font-Poppins font-medium text-neutral-800 text-sm'>Preferred Contact</h1>
                    <div className='w-full px-4'></div>
                </div>
                <div className='pt-3'>
                    {getClientJSON.map((client, index) => (
                        <ClientItem key={client.id} index={index} id={client.id} first={client.firstName} last={client.lastName} dob={client.dob} contact={client.contact} phone={client.phone} email={client.email} sort={sortType}/>
                    ))}
                </div>
            </div>
        </div>
    )
    }

export default ClientList;
