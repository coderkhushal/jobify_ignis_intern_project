"use client"
import useQuery from '@/hooks/useQuery'
import { JobType } from '@/types'
import { AlarmClock, Banknote,  MapPin } from 'lucide-react'
import React from 'react'

const SingleJobPage = ({params}:{params: {id: string}}) => {
    // @ts-expect-error some error
    const {data, loading } = useQuery<JobType>(`http://localhost:8000/api/job/${React.use(params).id}`)
  return (
    <div className='flex py-32 flex-col w-full h-full px-20 '>
        {loading && <div className='h-full w-full flex items-center justify-center '><img src="/loading.gif" alt="Loading" /></div>}
        {!loading && data && <div className='flex flex-col gap-y-4'>
            <div className='flex gap-x-4 bg-gray-200 rounded-xl border-muted-foreground p-6'>
                <img src={data.company_logo_url ? data.company_logo_url : ""} alt="logo" className='rounded-full' width={50} height={50}/>
                <div className='flex flex-col'>
                    <div className='text-3xl font-bold'>{data.title}</div>
                    <div className='text-base gap-x-4 flex'>
                        <div>{data.company_name}</div>
                        <div>Posted at {data.posted_date.split('T')[0]}</div>
                        
                        </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-4 gap-x-4 bg-gray-200 h-full w-full p-4 rounded-xl border-muted-foreground'>
                <h1 className='font-bold text-2xl'>Overview</h1>
                <div className="flex flex-col gap-y-4">

                {/* <div className='text-sm font-bold'>{data.salary}</div> */}
                <div className='flex items-center gap-x-4'>
                    <MapPin/>                   
                    {data.workplace_types && data.workplace_types.map((workplace, index) => (
                        <div key ={index} className='text-sm flex gap-x-1  bg-gray-700 text-white rounded-xl p-2 text-bold'>{workplace.name}</div>
                    ))}
                </div>

                <div className='flex items-center gap-x-4'>
                    <Banknote/>
                    <div className='text-sm flex gap-x-1 bg-gray-700 text-white rounded-xl p-2 text-bold'>${data.salary}/yr</div>
                </div>
                <div className='flex items-center gap-x-4'>
                    <AlarmClock/>
                    <div className='text-sm flex gap-x-1 bg-gray-700 text-white rounded-xl p-2 text-bold'>{data.employment_type}</div>
                </div>
            </div>
                </div>

            <div className='flex gap-x-4 bg-gray-200 rounded-xl border-muted-foreground p-6'>
                <div className='flex flex-col'>
                    <div className='text-2xl font-bold'>Job Details</div>
                    <div className='text-xl'>{data.summary}</div>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default SingleJobPage