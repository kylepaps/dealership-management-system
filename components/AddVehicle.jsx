import React from 'react';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';


const AddVehicle = () => {
  const { mutate } = useSWRConfig()
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
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
    console.log(res)
    mutate('/api/vehicles')
  };
  
  return (
    
    <form className=' bg-amber-300 rounded-xl p-2 shadow-sm w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-row space-x-4 items-center'>
          <div className='flex flex-col'>
            <label className='text-sm'>Make</label>
            <input className={errors.make?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md focus:outline-none p-1'} placeholder={errors.make?.type === 'required' ? 'Make is required' : null} type='text' {...register("make", { required: true })}></input>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Model</label>
            <input className={errors.model?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md focus:outline-none p-1'} placeholder={errors.model?.type === 'required' ? 'Model is required' : null} type='text' {...register("model", { required: true })}></input>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Vehicle Type</label>
            <select className='w-48 p-1 rounded-md' {...register("type")}>
              <option value="COMMERCIAL">Commercial</option>
              <option value="PICKUP">Pickup</option>
              <option value="SUV">SUV</option>
              <option value="MINIVAN">Minivan</option>
              <option value="SPORTSCAR">Sportscar</option>
              <option value="CAR">Car</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Year (2010 - 2023)</label>
            <input className={errors.year?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md focus:outline-none p-1'} placeholder={errors.year?.type === 'required' ? 'Year is required' : null} type='number' {...register("year", { required: true, min:2010, max:2023 })}></input>
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Price Per Day (min $15)</label>
            <input className={errors.price?.type === 'required' ? 'rounded-md border-2 border-red-700 focus:outline-none p-1 placeholder:border-red-700' : 'rounded-md focus:outline-none p-1'} placeholder={errors.price?.type === 'required' ? 'Price is required' : null} type='number' {...register("price", { required: true, min: 15 })}></input>
          </div>
          <button className='w-fit h-fit p-2 rounded-md bg-yellow-50' type='submit'>Create Vehicle</button>
        </div>
    </form>
    
  )
};

export default AddVehicle;
