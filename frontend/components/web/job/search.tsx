"use client"
import { Input } from '@/components/ui/input'
import { useSearch } from '@/context/SearchContext'
import useQuery from '@/hooks/useQuery'
import { JobType } from '@/types'
import { Banknote, BriefcaseIcon, HouseIcon, SearchIcon } from 'lucide-react'
import React, { useEffect } from 'react'


const Search = () => {
    const {search, setSearch, url } = useSearch()
    const {data, loading, error} = useQuery<JobType[]>(url)
    useEffect(()=>{
        if(!loading){
            console.log(data)
            console.log(error)
        }
    }   ,[loading])
  return (
    <div className='bg-gray-50 font-sans flex flex-col px-4 rounded-xl py-4'>
        <div className="w-full flex rounded-3xl border-gray-600   border px-4 items-center ">

        <Input placeholder='Search By Title' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full border-none focus:none focus-visible:none text-gray-600 font-bold'  />
        <SearchIcon className='cursor-pointer'/>

        </div>
        <div className="flex justify-evenly items-center px-2 py-4">
            
        <div className="flex justify-evenly items-center px-2 py-4">
            <div className=" bg-gray-50  border-muted-foreground border items-center gap-x-1 rounded-xl px-3  flex justify-around ">
                <BriefcaseIcon className='size-4'/>
                Job type
            </div>
        </div>
        <div className="flex justify-evenly items-center px-2 py-4">
            <div className=" bg-gray-50 border-muted-foreground border items-center gap-x-1 rounded-xl px-3  flex justify-around ">
                <HouseIcon className='size-4'/>
                Workplace 
            </div>
        </div>
        <div className="flex justify-evenly items-center px-2 py-4">
            <div className=" bg-gray-50 border-muted-foreground border items-center gap-x-1 rounded-xl px-3  flex justify-around ">
                <HouseIcon className='size-4'/>
                Timezone
            </div>
        </div>
        <div className="flex justify-evenly items-center px-2 py-4">
            <div className=" bg-gray-50 border-muted-foreground border items-center gap-x-1 rounded-xl px-3  flex justify-around ">
                <Banknote className='size-4'/>
                Min Salary
            </div>
        </div>
        <div className="flex justify-evenly items-center px-2 py-4">
            <div className=" bg-gray-50 border-muted-foreground border items-center gap-x-1 rounded-xl px-3  flex justify-around ">
                <Banknote className='size-4'/>
                Max Salary
            </div>
        </div>

    </div>
    </div>
  )
}

export default Search