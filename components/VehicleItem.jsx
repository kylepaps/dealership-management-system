import React from 'react'
import { useSWRConfig } from 'swr';
import Link from 'next/link'

const VehicleItem = ({id, index, make, model, type, year, price, sort}) => {
    const { mutate } = useSWRConfig()
    const deleteVehicle = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/vehicles/${id}`, {
          method: 'DELETE'
        })
        mutate(`/api/vehicles/filter/${sort}`)
    }

    return (
        <div className='flex flex-row justify-between py-2 hover:bg-indigo-100 rounded-md'>
            <h1 className='w-full px-4 font-Poppins font-normal text-neutral-800 text-sm'>{index + 1}</h1>
            <h1 className='w-full px-2 font-Poppins font-normal text-neutral-800 text-sm'>{make}</h1>
            <h1 className='w-full px-2 font-Poppins font-normal text-neutral-800 text-sm'>{model}</h1>
            <h1 className='w-full px-2 font-Poppins font-normal text-neutral-800 text-sm'>{type}</h1>
            <h1 className='w-full px-2 font-Poppins font-normal text-neutral-800 text-sm'>{year}</h1>
            <h1 className='w-full px-2 font-Poppins font-normal text-neutral-800 text-sm'>${price}</h1>
            <div className="w-full px-4 flex justify-end">
                <button onClick={deleteVehicle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default VehicleItem;
