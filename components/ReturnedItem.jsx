import React from 'react'
import { useSWRConfig } from 'swr'
import { useSession } from "next-auth/react"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { type } from 'os'

const ReturnedItem = ({id, index, clientId, vehicleId, firstName, lastName, email, model, make, year, price, issuedDate, returnedDate}) => {

    const issueDate = new Date(issuedDate)
    const returnDate = new Date(returnedDate)
    
    function dateCalc(a, b) {
      const Difference_In_Time = b.getTime() - a.getTime()
      return Math.floor(Difference_In_Time / (1000 * 3600 * 24))
    }
    function priceCalc(days, price) {
      return price * days
    }


    const totalDays = dateCalc(issueDate, returnDate)
    const totalPrice = priceCalc(totalDays, price)
    const issueString = issuedDate.slice(0, 10)
    const returnString = returnedDate.slice(0, 10)

    return (
        <div className='flex flex-row justify-start items-center py-2 hover:bg-indigo-100 rounded-md'>
          <div className='flex flex-row w-full space-x-6 px-4 items-center'>
            <h1 className='font-Poppins font-normal text-sm text-neutral-800 w-12 flex'>{clientId}</h1>
            <div className='flex flex-col w-32'>
              <h1 className='text-sm font-Poppins font-semibold text-neutral-800 pb-2'>{firstName} {lastName}</h1>
              <h1 className='text-xs font-Poppins font-normal text-neutral-800'>{email}</h1>
            </div>
          </div>
          <div className='flex flex-row w-full space-x-6 px-4 items-center'>
            <h1 className='font-Poppins font-normal text-sm text-neutral-800 w-12 flex'>{vehicleId}</h1>
            <div className='flex flex-col w-32'>
              <h1 className='text-sm font-Poppins font-semibold text-neutral-800 pb-2'>{make} {model}</h1>
              <h1 className='text-xs font-Poppins font-normal text-neutral-800'>{year}</h1>
            </div>
          </div>
          <div className='flex flex-row w-full space-x-6 px-4 items-center'>
            <div className='flex flex-col w-full'>
              <div className='flex flex-row pb-2 w-52'>
                <h1 className='font-Poppins font-semibold text-neutral-800 text-sm pr-1'>{issueString}</h1>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                <h1 className='font-Poppins font-semibold text-neutral-800 text-sm pl-1'>{returnString}</h1>
              </div>
              <h1 className='text-xs font-Poppins font-normal text-neutral-800'>{totalDays} days</h1>
            </div>
          </div>
          <div className='w-full flex px-4 items-center justify-center'>
            <h1 className='font-Poppins font-normal text-neutral-800 text-sm'>${totalPrice}</h1>
          </div>
      </div>
    )
}

export default ReturnedItem;
