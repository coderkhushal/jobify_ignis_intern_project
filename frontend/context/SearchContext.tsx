/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useQuery from "@/hooks/useQuery";
import { FilterType, JobType } from "@/types";
import React, { createContext } from "react";





export type SearchContextType = {
    search: string;
    setsearch: (search: string) => void;
    url: string;
    filter: () => void;
    data: {results:JobType[]};
    loading: boolean;
    error: any;
    
    };
    
    

export const SearchContext = createContext<SearchContextType>({
    search: '',
    setsearch: () => {},
    data: {results:[]},
    loading: false,
    error: null,

    url: 'http://localhost:8000/api/jobs',
    filter: () => {},
});


export const SearchProvider = ({children}   :{children:React.ReactNode})=>{
    const[search, setSearch] = React.useState('')

    const [filterjson, setFilterjson] = React.useState<FilterType>({})
    
    const [url , setUrl ] = React.useState<string>('http://localhost:8000/api/jobs')
    const {data, loading , error, refetch } = useQuery<{results:JobType[]}>(url, ) 

    const setsearch = (searchval : string)=>{
        setFilterjson({title:searchval})
        setSearch(searchval)
    }
    const filter = () =>{
        const f: FilterType = filterjson
        let tempurl = 'http://localhost:8000/api/jobs?'
        for(const key  in f){
            tempurl += `${key}=${f[key as keyof FilterType]}&`
        }
        setUrl(tempurl)
        refetch()
    }

    return <SearchContext.Provider value={{search , setsearch ,url , filter, data: data || {results: []}, loading, error   }}>
        {children}
    </SearchContext.Provider>
}
export const useSearch = () => React.useContext(SearchContext);