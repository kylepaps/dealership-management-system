import React from 'react'

const IssueItem = ({clientId, vehicleId}) => {
  return (
    <div className='flex flex-row space-x-2'>
      <h1>{clientId}</h1>
      <h1>{vehicleId}</h1>
    </div>
  )
}

export default IssueItem