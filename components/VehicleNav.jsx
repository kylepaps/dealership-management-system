import React from 'react';
import AddVehicle from './AddVehicle'

const VehicleNav = ({vehicles}) => {
  
  console.log(vehicles)
  return (
    <div className='w-full'>
      <AddVehicle/>
      
      <div>
        {vehicles.map((car) => (
          <h1 key={car.id}>{car.model}</h1>
        ))}
      </div>
    </div>
  )
};

export default VehicleNav;

