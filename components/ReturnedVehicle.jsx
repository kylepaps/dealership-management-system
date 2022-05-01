import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import ReturnedItem from './ReturnedItem'

const ReturnedVehicle = () => {
    const { data: returnedData } = useSWR(`/api/vehicles/returned`, fetcher)
    if (!returnedData) {
        return <h1>loading...</h1>
    } 
    const getReturnedString = JSON.stringify(returnedData.returned)
    const getReturnedJSON = JSON.parse(getReturnedString)
    function dateSort(a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt)
    }
    const sortedList = getReturnedJSON.sort(dateSort)

    return (

        <div className='flex flex-col justify-between items-start w-full h-body overflow-hidden'>
            <div className='flex flex-col w-full justify-between p-4 h-activity'>
                <div className='flex flex-col p-4 bg-white bg-opacity-90 rounded-xl shadow-md overflow-auto'>
                    <h1 className='font-Poppins font-semibold text-base text-neutral-700'>Returned Vehicles</h1>
                    <div className='flex flex-row items-center justify-between pt-4 pb-2 mb-2 border-b-2 border-indigo-500 border-opacity-50'>
                        <div className='w-full px-4 space-x-6 justify-start flex'>
                            <h1 className='font-Poppins font-medium text-neutral-800 text-sm w-12'>ID</h1>
                            <h1 className='font-Poppins font-medium text-neutral-800 text-sm w-32'>Client</h1>
                        </div>
                        <div className='w-full px-4 space-x-6 justify-start flex'>
                            <h1 className='font-Poppins font-medium text-neutral-800 text-sm w-12'>ID</h1>
                            <h1 className='font-Poppins font-medium text-neutral-800 text-sm w-32'>Vehicle</h1>
                        </div>
                        <div className='w-full px-4 justify-start flex'>
                            <h1 className='font-Poppins font-medium text-neutral-800 text-sm pr-1'>Issued</h1>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            <h1 className='font-Poppins font-medium text-neutral-800 text-sm pl-1'>Returned</h1>
                        </div>
                        <div className='w-full px-4 justify-center flex'>
                            <h1 className='font-Poppins font-medium text-neutral-800 text-sm pl-6'>Total Price</h1>
                        </div>
                    </div>
                    <div className='overflow-y-auto'>
                        {sortedList.map((issue, index) => (
                            <ReturnedItem key={issue.id} id={issue.id} index={index} clientId={issue.clientId} vehicleId={issue.carId} firstName={issue.client.firstName} lastName={issue.client.lastName} email={issue.client.email} model={issue.car.model} make={issue.car.make} year={issue.car.year} price={issue.car.price} issuedDate={issue.createdAt} returnedDate={issue.updatedAt}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReturnedVehicle