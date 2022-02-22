import React, { useState, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import fetcher from '../lib/fetcher'
import VehicleItem from './VehicleItem'
import { useForm } from 'react-hook-form';

const VehicleList = () => {
    const { mutate } = useSWRConfig()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sortType, setSortType] = useState()
    const { data: vehicleData } = useSWR(`/api/vehicles/filter/${sortType}`, fetcher)

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
    };

    return (
        <div className='flex flex-col w-full justify-between p-6'>
            <form className='bg-white bg-opacity-90 rounded-xl p-2 shadow-md w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col'>
                  <h1 className='p-4'>Create Vehicle</h1>
                  <div className='flex vehicle-form:flex-row flex-col p-4 vehicle-form:space-x-4 justify-between'>
                    <div className='flex flex-col w-full'>
                      <div><label className='text-sm'>Make</label><label className='text-red-700 text'> *</label></div>
                      <input className={errors.make?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500'} placeholder={errors.make?.type === 'required' ? 'Make is required' : null} type='text' {...register("make", { required: true })}></input>
                    </div>
                    <div className='flex flex-col w-full'>
                    <div><label className='text-sm'>Model</label><label className='text-red-700 text'> *</label></div>
                      <input className={errors.model?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500'} placeholder={errors.model?.type === 'required' ? 'Model is required' : null} type='text' {...register("model", { required: true })}></input>
                    </div>
                    <div className='flex flex-col w-full'>
                      <div><label className='text-sm'>Vehicle Type</label><label className='text-red-700 text'> *</label></div>
                      <select className='rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500 selection:outline-indigo-500' {...register("type")}>
                        <option value="COMMERCIAL">Commercial</option>
                        <option value="PICKUP">Pickup</option>
                        <option value="SUV">SUV</option>
                        <option value="MINIVAN">Minivan</option>
                        <option value="SPORTSCAR">Sportscar</option>
                        <option value="CAR">Car</option>
                      </select>
                    </div>
                    <div className='flex flex-col w-full'>
                    <div><label className='text-sm'>Year (2010 - 2023)</label><label className='text-red-700 text'> *</label></div>
                      <input className={errors.year?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500'} placeholder={errors.year?.type === 'required' ? 'Year is required' : null} type='number' {...register("year", { required: true, min:2010, max:2023 })}></input>
                    </div>
                    <div className='flex flex-col w-full'>
                      <div><label className='text-sm'>Price Per Day (min $15)</label><label className='text-red-700 text'> *</label></div>
                      <input className={errors.price?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md border-2 border-neutral-300 outline-neutral-500 p-1 focus:outline-indigo-500'} placeholder={errors.price?.type === 'required' ? 'Price is required' : null} type='number' {...register("price", { required: true, min: 15 })}></input>
                    </div>
                  </div>
                  <div className='flex flex-row w-full justify-end p-4'>
                    <button className='w-fit h-fit p-2 rounded-md bg-indigo-500 text-neutral-50 hover:bg-indigo-400' type='submit'>Create Vehicle</button>
                  </div>
                </div>
            </form>
            <div className='flex flex-col p-4 bg-white bg-opacity-90 my-6 rounded-xl shadow-md'>
              <div className='flex flex-row justify-between'>
                <h1>Vehicles</h1>
                <div className='flex flex-col'>
                  <label>filter by</label>
                  <select className='w-44' onChange={(e) => setSortType(e.target.value)}>
                      <option value='make'>Make</option>
                      <option value='model'>Model</option>
                      <option value='yearlow'>Year Oldest to Newest</option>
                      <option value='yearhigh'>Year Newest to Oldest</option>
                      <option value='type'>Vehicle Type</option>
                      <option value='pricelow'>Price Low to High</option>
                      <option value='pricehigh'>Price High to Low</option>
                  </select>
                </div>
                
              </div>
              <div className='flex flex-row border-b-2 border-rose-200 border-opacity-50 justify-between items-center pt-6'>
                <div className='w-full px-4'></div>
                <h1 className='w-full px-2'>Make</h1>
                <h1 className='w-full px-2'>Model</h1>
                <h1 className='w-full px-2'>Type</h1>
                <h1 className='w-full px-2'>Year</h1>
                <h1 className='w-full px-2'>Price Per Day</h1>
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
