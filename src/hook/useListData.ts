import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ListData } from "../interface/ListData";

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<ListData[]>=> {
    const response = axios.get(API_URL + '/lists')
    return response;
    
}

export function useListData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['list-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data
    }

}