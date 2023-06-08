import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../helper/axios';


export const useFetchDetailPokemon = (id, isRandom) => {
    const random = Math.floor(Math.random() * 1000) + 1;
    return useQuery({
        queryFn: async () => {
            const pokemon = await axiosInstance.get(`/pokemon/${isRandom ? random : id}`)
            return pokemon.data
        },
        queryKey: ['single-pokemon', id],
    });
};