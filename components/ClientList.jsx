import React, { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import fetcher from '../lib/fetcher'
import ClientItem from './ClientItem'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const ClientList = () => {
    const { mutate } = useSWRConfig()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sortType, setSortType] = useState()
    const { data: clientData } = useSWR(`/api/clients/filter/${sortType}`, fetcher)
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
    // setClientList(getClientJSON)

    
    const onSubmit = async (data) => {
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
    };

    return (
        <div>
            <form className=' bg-amber-300 rounded-xl p-2 shadow-sm w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-row space-x-4 items-center'>
                    <div className='flex flex-col'>
                    <label className='text-sm'>First Name</label>
                    <input className={errors.firstName?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md focus:outline-none p-1'} placeholder={errors.firstName?.type === 'required' ? 'First Name is required' : null} type='text' {...register("firstName", { required: true })}></input>
                    </div>
                    <div className='flex flex-col'>
                    <label className='text-sm'>Last Name</label>
                    <input className={errors.lastName?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md focus:outline-none p-1'} placeholder={errors.lastName?.type === 'required' ? 'Last Name is required' : null} type='text' {...register("lastName", { required: true })}></input>
                    </div>
                    <div className='flex flex-col'>
                    <label className='text-sm'>Date of Birth</label>
                    <input className={errors.dob?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md focus:outline-none p-1'} placeholder={errors.dob?.type === 'required' ? 'Date of Birth is required' : null} type='text' {...register("dob", { required: true })}></input>
                    </div>
                    <div className='flex flex-col'>
                    <label className='text-sm'>Phone</label>
                    <input className='rounded-md focus:outline-none p-1' type='text' {...register("phone")}></input>
                    </div>
                    <div className='flex flex-col'>
                    <label className='text-sm'>Email</label>
                    <input className={errors.email?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md focus:outline-none p-1'} placeholder={errors.email?.type === 'required' ? 'Email is required' : null} type='email' {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })}></input>
                    </div>
                    <div className='flex flex-col'>
                    <label className='text-sm'>Preferred Contact Method</label>
                    <select className='w-48 p-1 rounded-md' {...register("contact")}>
                        <option value="EMAIL">Email</option>
                        <option value="PHONE">Phone</option>
                        <option value="BOTH">Both</option>
                    </select>
                    </div>
                    <button className='w-fit h-fit p-2 rounded-md bg-yellow-50' type='submit'>Create Client</button>
                </div>
            </form>
            <div className='flex flex-col py-4'>
                <label>filter by</label>
                <select className='w-44' onChange={(e) => setSortType(e.target.value)}>
                    <option value='firstname'>First Name</option>
                    <option value='lastname'>Last Name</option>
                    <option value='contact method'>Contact Method</option>
                    <option value='phone'>Phone</option>
                    <option value='email'>Email</option>
                </select>
            </div>
            {getClientJSON.map((client, index) => (
                <ClientItem key={client.id} index={index} id={client.id} first={client.firstName} last={client.lastName} dob={client.dob} contact={client.contact} phone={client.phone} email={client.email} sort={sortType}/>
            ))}
        </div>
    )
    }

export default ClientList;
