import React, { useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import fetcher from '../lib/fetcher'
import { useForm } from 'react-hook-form'
import IssueItem from './IssueItem'
import { useSession } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const IssueVehicle = () => {
    const { mutate } = useSWRConfig()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { data: issuedData } = useSWR(`/api/vehicles/issued`, fetcher)
    const { data: unissuedVehicleData } = useSWR(`/api/vehicles/unissued`, fetcher)
    const { data: unissuedClientData } = useSWR(`/api/clients/unissued`, fetcher)
    const { data: session } = useSession()
    
    if (!issuedData) {
        return <h1>loading...</h1>
    }
    if (!unissuedVehicleData) {
        return <h1>loading...</h1>
    }
    if (!unissuedClientData) {
        return <h1>loading...</h1>
    }

    const getIssuedString = JSON.stringify(issuedData.issued)
    const getIssuedJSON = JSON.parse(getIssuedString)
    const getUnissuedVehicles = JSON.stringify(unissuedVehicleData.cars)
    const unissuedVehicleJSON = JSON.parse(getUnissuedVehicles)
    const getUnissuedClients = JSON.stringify(unissuedClientData.clients)
    const unissuedClientJSON = JSON.parse(getUnissuedClients)
    

    const onSubmit = async (data) => {
        if (session?.user) {
            const res = await fetch('/api/vehicles/issued/create', {
                body: JSON.stringify({
                    carId: data.vehicleId,
                    clientId: data.clientId
                }),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            mutate(`/api/vehicles/issued`)
        } else {
            toast("Sign in to make changes")
        }
        
    };

    return (
        <div className='flex flex-col w-full justify-between p-4'>
            <ToastContainer/>
            <form className='bg-white bg-opacity-90 rounded-xl p-2 shadow-md w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col'>
                    <h1 className='p-4 font-Poppins font-semibold text-base text-neutral-700'>Issue Vehicle</h1>
                    <div className='flex vehicle-form:flex-row flex-col px-4 vehicle-form:space-x-4 justify-between'>
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-Poppins font-semibold text-neutral-600'>Vehicle</label>
                            <select className='rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 selection:outline-indigo-500 font-Poppins font-light text-sm' {...register("vehicleId")}>
                                <option value="">--Please choose an option--</option>
                                {unissuedVehicleJSON.map((vehicle) => (
                                    <option value={vehicle.id} className='font-Poppins font-light'>ID:{vehicle.id} {vehicle.make} {vehicle.model} {vehicle.year}</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='text-sm font-Poppins font-semibold text-neutral-600'>Client</label>
                            <select className='rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 selection:outline-indigo-500 font-Poppins font-light text-sm' {...register("clientId")}>
                                <option value="">--Please choose an option--</option>
                                {unissuedClientJSON.map((client) => (
                                    <option value={client.id}>ID:{client.id} {client.firstName} {client.lastName} {client.email}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row w-full justify-end p-4'>
                        <button className='w-fit h-fit p-2 rounded-md bg-indigo-500 text-neutral-50 hover:bg-indigo-400 font-Poppins font-light' type='submit'>Issue Vehicle</button>
                    </div>
                </div>
            </form>
            <div className='flex flex-col h-full p-4 bg-white bg-opacity-90 my-6 rounded-xl shadow-md'>
              <div className='flex flex-row justify-between'>
                <h1 className='font-Poppins font-semibold text-base text-neutral-700'>Issued</h1>
              </div>
              <div className='flex flex-row border-b-2 border-indigo-500 border-opacity-50 justify-start items-center pt-4'>
                <h1 className='w-full px-4 justify-start flex font-Poppins font-medium text-neutral-800 text-sm'>Client</h1>
                <h1 className='w-full px-4 justify-start flex font-Poppins font-medium text-neutral-800 text-sm'>Vehicle</h1>
                <h1 className='w-full px-4 justify-center flex font-Poppins font-medium text-neutral-800 text-sm'>Date Issued</h1>
                <h1 className='w-full px-4 justify-center flex font-Poppins font-medium text-neutral-800 text-sm'>Price Per Day</h1>
            </div> 
                <div className='pt-3'>
                    {getIssuedJSON.map((issue, index) => (
                        <IssueItem index={index} key={issue.id} clientId={issue.clientId} vehicleId={issue.carId} firstName={issue.client.firstName} lastName={issue.client.lastName} email={issue.client.email} model={issue.car.model} make={issue.car.make} year={issue.car.year} price={issue.car.price} date={issue.createdAt}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IssueVehicle