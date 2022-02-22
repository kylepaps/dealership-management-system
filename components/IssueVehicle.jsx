import React, { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import fetcher from '../lib/fetcher'
import { useForm } from 'react-hook-form';
import IssueItem from './IssueItem';

const IssueVehicle = () => {
    const { mutate } = useSWRConfig()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: vehicleData } = useSWR(`/api/vehicles`, fetcher)
    const { data: clientData } = useSWR(`/api/clients`, fetcher)
    const { data: issuedData } = useSWR(`/api/vehicles/issued`, fetcher)
    
    if (!vehicleData) {
        return <h1>loading...</h1>
    }
    if (!clientData) {
        return <h1>loading...</h1>
    }
    if (!issuedData) {
        return <h1>loading...</h1>
    }
    
    const getVehicleString = JSON.stringify(vehicleData.cars)
    const getVehicleJSON = JSON.parse(getVehicleString)
    const getClientString = JSON.stringify(clientData.clients)
    const getClientJSON = JSON.parse(getClientString)
    const getIssuedString = JSON.stringify(issuedData.issued)
    const getIssuedJSON = JSON.parse(getIssuedString)
    console.log(getVehicleJSON)
    console.log(getClientJSON)
    console.log(getIssuedJSON)
    

    const onSubmit = async (data) => {
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
    };

    return (
        <div>
            <form className=' bg-amber-300 rounded-xl p-2 shadow-sm w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col p-2'>
                    <label className='text-sm'>Vehicle</label>
                    <select className='w-fit p-1 rounded-md' {...register("vehicleId")}>
                        <option value="">--Please choose an option--</option>
                        {getVehicleJSON.map((vehicle) => (
                            <option value={vehicle.id}>ID:{vehicle.id} {vehicle.make} {vehicle.model} {vehicle.year}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col p-2'>
                    <label className='text-sm'>Client</label>
                    <select className='w-fit p-1 rounded-md' {...register("clientId")}>
                        <option value="">--Please choose an option--</option>
                        {getClientJSON.map((client) => (
                            <option value={client.id}>ID:{client.id} {client.firstName} {client.lastName} {client.email}</option>
                        ))}
                    </select>
                </div>
                <button className='w-fit h-fit p-2 rounded-md bg-yellow-50' type='submit'>Issue Vehicle</button>
            </form>
            {getIssuedJSON.map((vehicle) => (
                <IssueItem key={vehicle.id} clientId={vehicle.clientId} vehicleId={vehicle.carId}/>
            ))}
        </div>
    )
}

export default IssueVehicle