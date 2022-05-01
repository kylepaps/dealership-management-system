import React from 'react'
import { useSWRConfig } from 'swr'
import { useSession } from "next-auth/react"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const IssueItem = ({index, issuedId, clientId, vehicleId, firstName, lastName, email, model, make, year, price, date}) => {

  const { mutate } = useSWRConfig()
  const { data: session } = useSession()

  const issueDate = date.slice(0, 10)

  const returnVehicle = async (e) => {
        
    if (session?.user) {
        e.preventDefault()
        const res = await fetch(`/api/vehicles/returned/${issuedId}`, {
            method: 'PUT'
        })
        mutate(`/api/vehicles/issued`)
        toast(firstName + " " + lastName + " returned " + make + " " + model)
    } else {
        toast("Sign in to make changes")
    }
}
  
  
  
  return (
    <div className='flex flex-row justify-start items-center py-2 hover:bg-indigo-100 rounded-md'>
      <div className='flex flex-row w-full space-x-6 px-4 items-center'>
        {/* <h1 className='font-Poppins font-normal text-neutral-800 w-12 flex justify-end'>{clientId}</h1> */}
        <div className='flex flex-col w-full'>
          <h1 className='text-sm font-Poppins font-semibold text-neutral-800'>{firstName} {lastName}</h1>
          <h1 className='text-xs font-Poppins font-normal text-neutral-800'>{email}</h1>
        </div>
      </div>
      <div className='flex flex-row w-full space-x-6 px-4 items-center'>
        {/* <h1 className='font-Poppins font-normal text-neutral-800 w-12 flex justify-end'>{vehicleId}</h1> */}
        <div className='flex flex-col w-full'>
          <h1 className='text-sm font-Poppins font-semibold text-neutral-800'>{make} {model}</h1>
          <h1 className='text-xs font-Poppins font-normal text-neutral-800'>{year}</h1>
        </div>
      </div>
      <div className='w-full flex px-4 items-center justify-center'>
        <h1 className='font-Poppins font-normal text-neutral-800 text-sm'>{issueDate}</h1>
      </div>
      <div className='w-full flex px-4 items-center justify-center'>
        <h1 className='font-Poppins font-normal text-neutral-800 text-sm'>${price}</h1>
      </div>
      <div className='w-full flex px-4 items-center justify-end'>
        <div className='flex w-full items-center justify-end pr-10'>
          <button onClick={returnVehicle}>
            <svg class="w-6 h-6 hover:text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"></path>
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default IssueItem