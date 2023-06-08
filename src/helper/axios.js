import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});

export const fetchAllPokemons = async ({ pageParam = 1 }) => {
    const { data } = await axiosInstance.get(`/pokemon?limit=12&offset=${(pageParam - 1) * 12}`);
    const allPokemon = await Promise.all(data.results.map(async (val) => {
        const result = await axiosInstance.get(val.url)
        return result.data
    }))

    return { pokemons: allPokemon, pageParam: pageParam + 1 };
};