"use client"
import Search from '@/components/web/job/search'
import { useSearch } from '@/context/SearchContext'
import { AlarmClock, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const JobsPage = () => {
  
    const {data, loading} = useSearch()
  return (
    <div className='w-full py-20 h-full flex flex-col px-20 '>
        <div className="flex w-full px-20 py-6 gap-y-4 flex-col">
        <Search/>
      <div className="flex flex-col gap-y-6">
        
          {!loading && data?.results.map((job , index) => (
            <Link href={`job/${job.id}`}  key={index}>

            <div className="flex w-full px-4 " >
            <Image src={"https://d3qscgr6xsioh.cloudfront.net/LNuyeIOTBo60tndaPbAG_d11933a105be6971e02c0e68e0251ed9.png?format=webp" } width={50} height={50} className="rounded-full" alt="logo"/>
            <div className="flex justify-between w-full space-y-3">

            <div className="flex flex-col px-4">
              <div className="text-lg font-bold">{job.title}</div>
              <div className="text-sm">{job.company_name}</div>
              
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                $
              <div className="text-sm font-bold">{job.salary}</div>
              /yr
              </div>
              <div className="flex justify-evenly gap-x-4">

              <div className="text-sm flex gap-x-1"><AlarmClock className='size-4'/>{job.employment_type}</div>
              <div className="text-sm flex gap-x-1"><Home className='size-4'/>{job.workplace_types && job.workplace_types[0].name}</div>
              </div>
            </div>
            </div>
            </div>
            </Link>
      ))}
              </div>
      {loading && <div className='h-full w-full flex items-center justify-center '><img src="/loading.gif" alt="Loading" /></div>}

        </div>
    </div>

  )
}

export default JobsPage