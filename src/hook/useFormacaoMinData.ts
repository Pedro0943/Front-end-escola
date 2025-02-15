import { useQuery } from "@tanstack/react-query";

import axios, { AxiosPromise } from "axios"
import { FormacaoMinData } from "../interface/FormacaoMinData";

const API_URL = 'http://localhost:8080'

/**
 * Função genérica para buscar dados de formação.
 * @param listId - ID da lista que define o tipo de formação
 */

const fetchData = async (listId: number): AxiosPromise<FormacaoMinData[]>=> {
    const response = axios.get(API_URL + `/lists/${listId}/formacao`)
    return response;
    
}

export function useFormacaoMinData(listId: number){
 
    const query = useQuery({
        queryFn: ()=> fetchData(listId),
        queryKey: ['formacaoMin-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data
    }

}

