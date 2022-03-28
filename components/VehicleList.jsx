import React, { useState, useEffect } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import fetcher from '../lib/fetcher'
import VehicleItem from './VehicleItem'
import { useForm } from 'react-hook-form'
import { useSession } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const VehicleList = () => {
    const { mutate } = useSWRConfig()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [sortType, setSortType] = useState()
    const { data: vehicleData } = useSWR(`/api/vehicles/filter/${sortType}`, fetcher)
    const { data: session } = useSession()

    useEffect(() => {
        const sortArray = type => {
          setSortType(type)
          mutate(`/api/vehicles/filter/${sortType}`)
        }
        sortArray(sortType)
    }, [sortType])
    
    if (!vehicleData) {
        return <h1>loading...</h1>
    }
    
    const getVehicleString = JSON.stringify(vehicleData.cars)
    const getVehicleJSON = JSON.parse(getVehicleString)
    
    const onSubmit = async (data) => {
        if (session?.user) {
          const res = await fetch('/api/vehicles/create', {
            body: JSON.stringify({
              car: {
                make: data.make,
                model: data.model,
                type: data.type,
                year: data.year,
                price: data.price
              }
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
          mutate(`/api/vehicles/filter/${sortType}`)
        } else {
          toast("Sign in to make changes");
        }
        
    };

    return (
        <div className='flex flex-col w-full h-full justify-between p-4'>
            <ToastContainer/>
            <form className='bg-white bg-opacity-90 rounded-xl shadow-md w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col'>
                  <h1 className='p-4 font-Poppins font-semibold text-base text-neutral-700'>Create Vehicle</h1>
                  <div className='flex vehicle-form:flex-row flex-col px-4 vehicle-form:space-x-4 justify-between'>
                    <div className='flex flex-col w-full'>
                      <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Make</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                      <input className={errors.make?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700 font-Poppins font-light text-sm' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 font-Poppins font-light text-sm'} placeholder={errors.make?.type === 'required' ? 'Make is required' : null} type='text' {...register("make", { required: true })}></input>
                    </div>
                    <div className='flex flex-col w-full'>
                    <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Model</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                      <input className={errors.model?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700 font-Poppins font-light text-sm' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 font-Poppins font-light text-sm'} placeholder={errors.model?.type === 'required' ? 'Model is required' : null} type='text' {...register("model", { required: true })}></input>
                    </div>
                    <div className='flex flex-col w-full'>
                      <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Vehicle Type</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                      <select className='rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 selection:outline-indigo-500 font-Poppins font-light text-sm' {...register("type")}>
                        <option value="COMMERCIAL" className='font-Poppins font-light text-sm'>Commercial</option>
                        <option value="PICKUP" className='font-Poppins font-light text-sm'>Pickup</option>
                        <option value="SUV" className='font-Poppins font-light text-sm'>SUV</option>
                        <option value="MINIVAN" className='font-Poppins font-light text-sm'>Minivan</option>
                        <option value="SPORTSCAR" className='font-Poppins font-light text-sm'>Sportscar</option>
                        <option value="CAR" className='font-Poppins font-light text-sm'>Car</option>
                      </select>
                    </div>
                    <div className='flex flex-col w-full'>
                    <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Year (2010 - 2023)</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                      <input className={errors.year?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700 font-Poppins font-light text-sm' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 font-Poppins font-light text-sm'} placeholder={errors.year?.type === 'required' ? 'Year is required' : null} type='number' {...register("year", { required: true, min:2010, max:2023 })}></input>
                    </div>
                    <div className='flex flex-col w-full'>
                      <div><label className='text-sm font-Poppins font-semibold text-neutral-600'>Price Per Day (min $15)</label><label className='font-Poppins font-semibold text-sm text-red-600'> *</label></div>
                      <input className={errors.price?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700 font-Poppins font-light text-sm' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 font-Poppins font-light text-sm'} placeholder={errors.price?.type === 'required' ? 'Price is required' : null} type='number' {...register("price", { required: true, min: 15 })}></input>
                    </div>
                  </div>
                  <div className='flex flex-row w-full justify-end p-4'>
                    <button className='w-fit h-fit p-2 rounded-md bg-indigo-500 text-neutral-50 hover:bg-indigo-400 font-Poppins font-light' type='submit'>Create Vehicle</button>
                  </div>
                </div>
            </form>
            <div className='flex flex-col h-full p-4 bg-white bg-opacity-90 my-4 rounded-xl shadow-md'>
              <div className='flex flex-row justify-between'>
                <h1 className='font-Poppins font-semibold text-base text-neutral-700'>Vehicles</h1>
                <div className='flex flex-col'>
                  <label className='font-Poppins font-medium text-sm text-neutral-600 pl-1'>Filter By</label>
                  <select className='w-44 font-Poppins font-light text-sm rounded-md border-2 focus:outline-indigo-500 active:outline-indigo-500' onChange={(e) => setSortType(e.target.value)}>
                      <option value='make' className='font-Poppins font-light text-sm'>Make</option>
                      <option value='model' className='font-Poppins font-light text-sm'>Model</option>
                      <option value='yearlow' className='font-Poppins font-light text-sm'>Year Oldest to Newest</option>
                      <option value='yearhigh' className='font-Poppins font-light text-sm'>Year Newest to Oldest</option>
                      <option value='type' className='font-Poppins font-light text-sm'>Vehicle Type</option>
                      <option value='pricelow' className='font-Poppins font-light text-sm'>Price Low to High</option>
                      <option value='pricehigh' className='font-Poppins font-light text-sm'>Price High to Low</option>
                  </select>
                </div>
                
              </div>
              <div className='flex flex-row border-b-2 border-indigo-500 border-opacity-50 justify-between items-center pt-4'>
                <div className='w-full px-4'></div>
                <h1 className='w-full px-2 font-Poppins font-medium text-neutral-800 text-sm'>Make</h1>
                <h1 className='w-full px-2 font-Poppins font-medium text-neutral-800 text-sm'>Model</h1>
                <h1 className='w-full px-2 font-Poppins font-medium text-neutral-800 text-sm'>Type</h1>
                <h1 className='w-full px-2 font-Poppins font-medium text-neutral-800 text-sm'>Year</h1>
                <h1 className='w-full px-2 font-Poppins font-medium text-neutral-800 text-sm'>Price Per Day</h1>
                <div className='w-full px-4'></div>
              </div>  
              <div className='pt-3'>
                {getVehicleJSON.map((car, index) => (
                    <VehicleItem key={car.id} index={index} id={car.id} make={car.make} model={car.model} year={car.year} type={car.type} price={car.price} sort={sortType}/>
                ))}
              </div>
              
            </div>
            
        </div>
    )
}

export default VehicleList;
