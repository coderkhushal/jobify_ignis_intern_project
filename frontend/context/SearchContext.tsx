"use client"
import { FilterType } from "@/types";
import React, { createContext } from "react";





export type SearchContextType = {
    search: string;
    setSearch: (search: string) => void;
    url: string;
    filter: (f: FilterType) => void;
    };
    
    

export const SearchContext = createContext<SearchContextType>({
    search: '',
    setSearch: () => {},
    url: 'http://localhost:8000/jobs/',
    filter: () => {},
});


export const SearchProvider = ({children}   :{children:React.ReactNode})=>{
    const[search, setSearch] = React.useState('')
    
    const [url , setUrl ] = React.useState<string>('http://localhost:8000/jobs/')
    const filter = (f: FilterType ) =>{
        if(f.title){
            setUrl(url=> (url + `?title=${f.title}`))
        }
        if(f.workplace_type){
            setUrl(url=> (url + `?workplace_type=${f.workplace_type}`))
        }
        if(f.min_salary){
            setUrl(url=> (url + `?min_salary=${f.min_salary}`))
        }
        if(f.max_salary){
            setUrl(url=> (url + `?max_salary=${f.max_salary}`))
        }
        if(f.page){
            setUrl(url=> (url + `?page_number=${f.page}`))
        }

    }

    return <SearchContext.Provider value={{search , setSearch ,url , filter  }}>
        {children}
    </SearchContext.Provider>
}
export const useSearch = () => React.useContext(SearchContext);