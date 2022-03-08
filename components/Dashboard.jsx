import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import ActivityItem from './ActivityItem'

const Dashboard = () => {
    const { data: vehicleData } = useSWR(`/api/activity/recent/vehicles`, fetcher)
    const { data: clientData } = useSWR(`/api/activity/recent/clients`, fetcher)
    const { data: issuedData } = useSWR(`/api/activity/recent/issued`, fetcher)
   
    if (!vehicleData) {
        return <h1>loading...</h1>
    } 
    if (!clientData) {
        return <h1>loading...</h1>
    } 
    if (!issuedData) {
        return <h1>loading...</h1>
    } 

    const getVehicleString = JSON.stringify(vehicleData.vehicles)
    const getVehicleJSON = JSON.parse(getVehicleString)
    const getClientString = JSON.stringify(clientData.clients)
    const getClientJSON = JSON.parse(getClientString)
    const getIssuedString = JSON.stringify(issuedData.issued)
    const getIssuedJSON = JSON.parse(getIssuedString)

    // const activityList = Object.assign({}, getClientJSON, getIssuedJSON, getVehicleJSON)
    const activityList = getVehicleJSON.concat(getClientJSON, getIssuedJSON)
    console.log(activityList)

    function dateSort(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt)
    }
    const sortedList = activityList.sort(dateSort)
    console.log(sortedList)

    return (
        <div className='flex flex-col justify-between items-start w-full h-body'>
            <div className='flex h-56 w-full'>
                <h1 className='flex h-full'>Hello</h1>
            </div>

            <div className='flex flex-col w-full justify-between p-6 max-h-full'>
                <div className='flex flex-col p-6 bg-white bg-opacity-90 my-6 rounded-xl shadow-md overflow-auto'>
                    <h1 className='font-Poppins font-semibold text-xl text-neutral-700'>Recent Acitvity</h1>
                    <div className='flex flex-row items-center justify-between pt-6 pb-3 mb-3 border-b-2 border-indigo-500 border-opacity-50'>
                        <h1 className='font-Poppins px-2 font-medium text-base text-neutral-700'>Type</h1>
                        <h1 className='font-Poppins px-2 font-medium text-base text-neutral-700'>Actioned Date</h1>
                    </div>
                    <div className='overflow-y-auto'>
                        {sortedList.map((item, index) => (
                            <ActivityItem key={item.createdAt} index={index} id={item.id} date={item.createdAt} firstName={item.firstName} lastName={item.lastName} email={item.email} make={item.make} model={item.model} year={item.year} issuedMake={item.car ? item.car.make : undefined} issuedModel={item.car ? item.car.model : undefined} issuedYear={item.car ? item.car.year : undefined}/>
                        ))}
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Dashboard