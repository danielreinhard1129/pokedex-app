import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchAllPokemons } from '../helper/axios';


export const useFetchPokemons = () => {
    return useInfiniteQuery({
        queryFn: fetchAllPokemons,
        queryKey: ['pokemons'],
        getNextPageParam: (lastPage) => {
            return lastPage.pageParam
        },
    });
};