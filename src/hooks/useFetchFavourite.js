import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../helper/axios';


export const useFetchFavourite = (data) => {
    return useQuery({
        queryFn: async () => {
            const allFavourite = await Promise.all(data?.map(async (data) => {
                const result = await axiosInstance.get(`/pokemon/${data.pokemon_id}`)
                return result.data
            }))

            return allFavourite;
        },
        queryKey: ['favourite-pokemons'],
    });
};