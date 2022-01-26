import React from 'react';

const ClientItem = ({id, first, last, dob, contact, phone, email}) => {
    
    return (
        <div className='flex flex-row space-x-4'>
            <h1>{id}</h1>
            <h1>{first}</h1>
            <h1>{last}</h1>
            <h1>{dob}</h1>
            <h1>{contact}</h1>
            <h1>{email}</h1>
        </div>
    );
};

export default ClientItem;
