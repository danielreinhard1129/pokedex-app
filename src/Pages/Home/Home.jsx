import { Box, Heading, SimpleGrid, Skeleton } from '@chakra-ui/react'
import { useEffect } from 'react'
import CardRectangle from '../../Components/Cards/CardRectangle'
import CardSquare from '../../Components/Cards/CardSquare'
import Loading from '../../Components/Loading/Loading'
import Toast from '../../Components/Toast/Toast'
import { useFetchDetailPokemon } from '../../hooks/useFetchDetailPokemon'
import { useFetchPokemons } from '../../hooks/useFetchPokemons'




function Home(props) {
    const { data: pokemons, fetchNextPage, isFetching, isError: isErrorPokemons, error: errorPokemons } = useFetchPokemons()
    const { data: pokemon, isLoading: isLoadingPokemon, isError: isErrorPokemon, error: errorPokemon } = useFetchDetailPokemon(25, true)


    useEffect(() => {
        const onScroll = async (event) => {
            const { scrollHeight, scrollTop, clientHeight } =
                event.target.scrollingElement;

            if (scrollHeight - scrollTop <= clientHeight * 1.5) {
                await fetchNextPage();
            }
        };

        document.addEventListener("scroll", onScroll);
    }, []);

    return (
        <Box bgColor={'#F2F2F2'} minH={'100%'} px='8'>
            <Box h={'100%'}>
                {/* DESTAQUE */}
                <Box pt='10' pb='2'>
                    <Heading size='lg' fontWeight={'medium'}>
                        Destaque
                    </Heading>
                </Box>
                <Box mb='4'>
                    <Skeleton isLoaded={!isLoadingPokemon} rounded='xl'>
                        <CardRectangle pokemon={pokemon} allFavourite={props.allFavourite} getPokemons={props.getPokemons} />
                    </Skeleton>
                </Box>

                {/* POKEMONS */}
                <Box pb='2'>
                    <Heading size='lg' fontWeight={'medium'}>
                        Pokemons
                    </Heading>
                </Box>
                <Box minHeight={'100vh'}>
                    <SimpleGrid columns={2} spacing={5}>
                        {
                            pokemons?.pages?.map((item) => {
                                return item.pokemons.map((val) => {
                                    return <Skeleton isLoaded={!isLoadingPokemon} rounded='xl' key={val.id}>
                                        <Box>
                                            <CardSquare allFavourite={props.allFavourite} getPokemons={props.getPokemons} id={val.id} name={val.name} image={val.sprites?.other.home.front_default} types={val.types} />
                                        </Box>
                                    </Skeleton>
                                })
                            })
                        }
                    </SimpleGrid>
                </Box>
                {isFetching && pokemons && <Loading />}
                {isErrorPokemons ? <Toast name='Error' description={errorPokemons.message} status='error' /> : null}
                {isErrorPokemon ? <Toast name='Error' description={errorPokemon.message} status='error' /> : null}
            </Box>
        </Box >
    )
}

export default Home