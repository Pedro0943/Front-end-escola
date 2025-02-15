import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FormacaoData } from "../interface/FormacaoData";

const API_URL = 'http://localhost:8080'

/**
 * Função genérica para buscar dados de formação.
 * @param id - ID da lista que define o tipo de formação
 */

const fetchData = async (id: number): AxiosPromise<FormacaoData>=> {
    const response = axios.get(API_URL + `/formacao/${id}`)
    return response;
    
}

export function useFormacaoData(id: number){
    
    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ['formacaoid-data', id],
        retry: 2
    })

    return {
        ...query,
        data: query.data
    }

}
