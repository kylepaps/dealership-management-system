import React from 'react';
import { useSWRConfig } from 'swr';
import { useSession } from "next-auth/react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientItem = ({id, index, first, last, dob, contact, phone, email, sort}) => {
    const { mutate } = useSWRConfig()
    const { data: session } = useSession()

    const deleteClient = async (e) => {
        if (session?.user) {
            e.preventDefault()
            const res = await fetch(`/api/clients/${id}`, {
              method: 'DELETE'
            })
            mutate(`/api/clients/filter/${sort}`)
        } else {
            toast("Sign in to make changes");
        }
    }

    const birth = dob.slice(0, 10)
    
    return (
        <div className='flex flex-row justify-between items-center py-2 hover:bg-indigo-100 rounded-md min-w-fit'>
            <h1 className='flex w-full px-4 font-Poppins font-normal text-neutral-800'>{index + 1}</h1>
            <div className='flex flex-row px-2 w-full items-center'>
                <div className='flex flex-col w-full'>
                    <h1 className='w-full font-Poppins font-semibold text-neutral-800 text-sm'>{first} {last}</h1>
                    <h1 className='w-full font-Poppins font-normal text-neutral-800 text-xs'>{birth}</h1>    
                </div>
            </div>
            <h1 className='w-full px-2 font-Poppins font-normal text-neutral-800 text-sm'>{email}</h1>
            <h1 className='w-full px-2 font-Poppins font-normal text-neutral-800 text-sm'>{phone}</h1>
            <h1 className='w-full px-2 font-Poppins font-normal text-neutral-800 text-sm'>{contact}</h1>
            <div className='w-full px-4 flex justify-end'>    
                <button onClick={deleteClient}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ClientItem;
