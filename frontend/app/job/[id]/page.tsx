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
                <img src={"https://d3qscgr6xsioh.cloudfront.net/dMIfZTpnRn2011oKY2hu_logo-300.png?format=webp"} alt="logo" className='rounded-full' width={50} height={50}/>
                <div className='flex flex-col'>
                    <div className='text-3xl font-bold'>{data.title}</div>
                    <div className='text-base gap-x-4 flex'>
                        <div>{data.company_name}</div>

                        <div>Phoenix , AZ</div>
                        <div>Posted at {data.posted_date.split('T')[0]}</div>
                        <div>Updated at {data.posted_date.split('T')[0]}</div>
                        
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
                    <div className='text-xl'>Strategic Staffing Solutions (S3) is a woman-owned, global IT consulting and business services corporation that delivers staff augmentation, managed services, total workforce management programs and direct hire recruiting with industry expertise in financial services, energy and utilities, oil, healthcare and insurance, telecommunications and retail distribution. S3’s Consultants are placed with Customers through the U.S., Europe and the Americas. Founded in Detroit, MI in 1990, S3 has reported consistent growth and profit every year and carries zero debt.

S3 Diversity Statistics
S3 has a 50/50 split among male/female employees; 60% of S3 employees identify as non-white; S3 s leadership team are 50% women; S3 currently employs 73% military veterans, military spouses and military affiliates.</div>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default SingleJobPage