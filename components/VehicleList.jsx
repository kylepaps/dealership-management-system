import React from 'react';

const VehicleList = ({vehicles}) => {

    return (
        <div className='w-full'>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between items-center border-b-2 font-bold p-2'>
                    <div className='w-24'></div>
                    <h1 className='text-center w-24'>Make</h1>
                    <h1 className='text-center w-24'>Model</h1>
                    <h1 className='text-center w-24'>Year</h1>
                    <h1 className='text-center w-24'>Type</h1>
                    <h1 className='text-center w-24'>Price/Day</h1>
                    <div className='w-24'></div>
                </div>
                {vehicles.map((car, index) => (
                    <div className='flex flex-row justify-between items-center border-2 p-2' key={car.id}>
                        
                        <div className='items-center w-24'>
                            <p className='text-center'>{index + 1}</p>
                        </div>
                        <div className='items-center w-24'>
                            <p className='text-center'>{car.make}</p>
                        </div>
                        <div className='items-center w-24'>
                            <p className='text-center'>{car.model}</p>
                        </div>
                        <div className='items-center w-24'>
                            <p className='text-center'>{car.year}</p>
                        </div>
                        <div className='items-center w-24'>
                            <p className='text-center'>{car.type}</p>
                        </div>
                        <div className='items-center w-24'>
                            <p className='text-center'>{car.price}</p>
                        </div>
                        <button>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VehicleList;
