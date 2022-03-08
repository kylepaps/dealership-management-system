import React from 'react'
import { useSWRConfig } from 'swr';
import Link from 'next/link'

const ActivityItem = ({id, index, date, firstName, lastName, email, make, model, year, issuedMake, issuedModel, issuedYear}) => {
    const actionedDate = date.slice(0, 10)
    if (firstName) {
        return (
            <div className='flex flex-row justify-center py-2 hover:bg-indigo-100 rounded-md'>
                <div className='w-full px-2 flex items-center'>
                    <h1 className='font-Poppins font-normal text-neutral-800 bg-red-500 bg-opacity-70 rounded-lg w-fit p-1'>Created Client</h1>
                </div>
                <div className='flex w-full justify-center'>
                    <div className='flex flex-col w-32 justify-start'>
                        <h1 className='flex font-Poppins font-semibold text-neutral-800'>{firstName} {lastName}</h1>
                        <h1 className='flex text-sm font-Poppins font-normal text-neutral-800'>{email}</h1>
                    </div>                    
                </div>
                <div className='w-full flex px-4 justify-end items-center'>
                    <h1 className='font-Poppins font-normal text-neutral-800'>{actionedDate}</h1>
                </div>
            </div>
        )
    } else if (make) {
        return (
            <div className='flex flex-row justify-between py-2 hover:bg-indigo-100 rounded-md'>
                <div className='w-full px-2 flex items-center'>
                    <h1 className='font-Poppins font-normal text-neutral-800 bg-orange-500 bg-opacity-70 rounded-lg w-fit p-1'>Created Vehicle</h1>
                </div>
                <div className='flex w-full justify-center'>
                    <div className='flex flex-col w-32 justify-start'>
                        <h1 className='flex font-Poppins font-semibold text-neutral-800'>{make} {model}</h1>
                        <h1 className='flex text-sm font-Poppins font-normal text-neutral-800'>{year}</h1>
                    </div>                    
                </div>
                <div className='w-full flex px-4 justify-end items-center'>
                    <h1 className='font-Poppins font-normal text-neutral-800'>{actionedDate}</h1>
                </div>
            </div>
        )
    } else if (issuedMake) {
        return (
            <div className='flex flex-row justify-center py-2 hover:bg-indigo-100 rounded-md'>
                <div className='w-full px-2 flex items-center'>
                    <h1 className='font-Poppins font-normal text-neutral-800 bg-green-500 bg-opacity-70 rounded-lg w-fit p-1'>Issued Vehicle</h1>
                </div>
                <div className='flex w-full justify-center'>
                    <div className='flex flex-col w-32 justify-start'>
                        <h1 className='flex font-Poppins font-semibold text-neutral-800'>{issuedMake} {issuedModel}</h1>
                        <h1 className='flex text-sm font-Poppins font-normal text-neutral-800'>{issuedYear}</h1>
                    </div>                    
                </div>
                <div className='w-full flex px-4 justify-end items-center'>
                    <h1 className='font-Poppins font-normal text-neutral-800'>{actionedDate}</h1>
                </div>
            </div>
        )
    } else {
        return (
            <h1>unknown activity</h1>
        )
    }
    
}

export default ActivityItem;