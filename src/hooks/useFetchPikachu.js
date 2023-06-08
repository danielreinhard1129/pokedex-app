import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../helper/axios';


export const useFetchPikachu = () => {
    return useQuery({
        queryFn: async () => {
            const pokemon = await axiosInstance.get(`/pokemon/pikachu`)
            return pokemon.data
        },
        queryKey: ['single-pokemon'],
    });
};