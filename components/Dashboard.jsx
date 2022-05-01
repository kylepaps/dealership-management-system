import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import ActivityItem from './ActivityItem'

const Dashboard = () => {
    const { data: vehicleData } = useSWR(`/api/activity/recent/vehicles`, fetcher)
    const { data: clientData } = useSWR(`/api/activity/recent/clients`, fetcher)
    const { data: issuedData } = useSWR(`/api/activity/recent/issued`, fetcher)
    const { data: returnedData } = useSWR(`/api/activity/recent/returned`, fetcher)
    const { data: unissuedData } = useSWR(`/api/vehicles/unissued`, fetcher)
   
    if (!vehicleData) {
        return <h1>loading...</h1>
    } 
    if (!clientData) {
        return <h1>loading...</h1>
    } 
    if (!issuedData) {
        return <h1>loading...</h1>
    } 
    if (!returnedData) {
        return <h1>loading...</h1>
    } 
    if (!unissuedData) {
        return <h1>loading...</h1>
    } 

    const getVehicleString = JSON.stringify(vehicleData.vehicles)
    const getVehicleJSON = JSON.parse(getVehicleString)
    const getClientString = JSON.stringify(clientData.clients)
    const getClientJSON = JSON.parse(getClientString)
    const getIssuedString = JSON.stringify(issuedData.issued)
    const getIssuedJSON = JSON.parse(getIssuedString)
    const getReturnedString = JSON.stringify(returnedData.issued)
    const getReturnedJSON = JSON.parse(getReturnedString)
    const getUnissuedString = JSON.stringify(unissuedData.cars)
    const getUnissuedJSON = JSON.parse(getUnissuedString)

    const activityList = getVehicleJSON.concat(getClientJSON, getIssuedJSON, getReturnedJSON)

    function dateSort(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt)
    }
    const sortedList = activityList.sort(dateSort)
    

    const unissuedCount = Object.keys(getUnissuedJSON).length
    const issuedCount = Object.keys(getIssuedJSON).length
    const totalCount = unissuedCount + issuedCount
    

    return (
        <div className='flex flex-col justify-between items-start w-full h-body overflow-hidden'>
            <div className='flex flex-row h-64 space-x-2 w-full px-4'>
                <div className='h-full w-full bg-white bg-opacity-90 rounded-xl shadow-md overflow-auto'>
                    <div className='flex flex-col w-full h-full justify-between p-6'>
                        <div className='flex justify-start'>
                            <svg className="w-12 h-12 bg-gradient-to-br bg-indigo-50 text-indigo-900 border-2 border-indigo-900 rounded-md p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                            </svg>
                        </div>
                        <div className='flex justify-center p1-2'>
                            <h1 className='flex font-Poppins font-normal text-3xl text-indigo-900'>Current Issued Vehicles</h1>
                        </div>
                        <div className='flex flex-row justify-end pr-4'>
                            <h1 className='flex font-Poppins font-semibold text-3xl justify-end text-indigo-900'>{issuedCount}</h1>
                            <h1 className='flex font-Poppins font-normal text-base justify-end text-indigo-900 pt-3'>/{totalCount}</h1>
                        </div>
                        
                    </div>
                </div>
                <div className='h-full w-full bg-white bg-opacity-90 rounded-xl shadow-md overflow-auto'>
                    <div className='flex flex-col w-full h-full justify-between p-6'>
                        <div className='flex justify-start'>
                            <svg className="w-12 h-12 bg-gradient-to-bl bg-indigo-50 text-indigo-900 border-2 border-indigo-900 rounded-md p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <div className='flex justify-center p1-2'>
                            <h1 className='flex font-Poppins font-normal text-3xl text-indigo-900'>Available Inventory</h1>
                        </div>
                        <div className='flex flex-col justify-end pr-4'>
                            <h1 className='flex font-Poppins font-semibold text-3xl justify-end text-indigo-900'>{unissuedCount}</h1>
                        </div>
                        
                    </div>
                </div>
                <div className='h-full w-full bg-white bg-opacity-90 rounded-xl shadow-md overflow-auto'>
                    <div className='flex flex-col w-full h-full justify-between p-6'>
                        <div className='flex justify-start'>
                            <svg className="w-12 h-12 bg-gradient-to-br bg-indigo-50 text-indigo-900 border-2 border-indigo-900 rounded-md p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className='flex justify-center p1-2'>
                            <h1 className='flex font-Poppins font-normal text-3xl text-indigo-900 text-opacity-'>Monthly Revenue</h1>
                        </div>
                        <div className='flex flex-col justify-end pr-4'>
                            <h1 className='flex font-Poppins font-semibold text-3xl justify-end text-indigo-900'>$12,453</h1>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full justify-between p-4 h-activity'>
                <div className='flex flex-col p-4 bg-white bg-opacity-90 rounded-xl shadow-md overflow-auto'>
                    <h1 className='font-Poppins font-semibold text-base text-neutral-700'>Recent Acitvity</h1>
                    <div className='flex flex-row items-center justify-between pt-4 pb-2 mb-2 border-b-2 border-indigo-500 border-opacity-50'>
                        <h1 className='font-Poppins px-2 font-medium text-sm text-neutral-700'>Type</h1>
                        <h1 className='font-Poppins px-2 font-medium text-sm text-neutral-700'>Actioned Date</h1>
                    </div>
                    <div className='overflow-y-auto'>
                        {sortedList.map((item, index) => (
                            <ActivityItem key={item.id} index={index} id={item.id} date={item.createdAt} firstName={item.firstName} lastName={item.lastName} email={item.email} make={item.make} model={item.model} year={item.year} issuedMake={item.car ? item.car.make : undefined} issuedModel={item.car ? item.car.model : undefined} issuedYear={item.car ? item.car.year : undefined}/>
                        ))}
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Dashboard