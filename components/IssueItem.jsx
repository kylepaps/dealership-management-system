import React from 'react'

const IssueItem = ({index, clientId, vehicleId, firstName, lastName, email, model, make, year, price, date}) => {
  const issueDate = date.slice(0, 10)
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
      
    </div>
  )
}

export default IssueItem