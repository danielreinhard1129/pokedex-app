import { Box, Heading, SimpleGrid, Skeleton, Spinner } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import CardRectangle from '../../Components/Cards/CardRectangle'
import CardSquare from '../../Components/Cards/CardSquare'
import Loading from '../../Components/Loading/Loading'
import { useFetchPokemons } from '../../hooks/useFetchPokemons'
import { useFetchPikachu } from '../../hooks/useFetchPikachu'
import Toast from '../../Components/Toast/Toast'


function Home() {
    const [isLoaded, setIsLoaded] = useState(false)
    setTimeout(() => {
        setIsLoaded(true)
    }, 1500)

    const { data: pokemons, fetchNextPage, isFetching, isError: isErrorPokemons, error: errorPokemons } = useFetchPokemons()
    const { data: pokemon, isError: isErrorPokemon, error: errorPokemon } = useFetchPikachu()


    useEffect(() => {
        const onScroll = async (event) => {
            const { scrollHeight, scrollTop, clientHeight } =
                event.target.scrollingElement;

            if (scrollHeight - scrollTop <= clientHeight) {
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
                    <Skeleton isLoaded={isLoaded} rounded='xl'>
                        <CardRectangle pokemon={pokemon} />
                    </Skeleton>
                </Box>

                {/* POKEMONS */}
                <Box pb='2'>
                    <Heading size='lg' fontWeight={'medium'}>
                        Pokemons
                    </Heading>
                </Box>
                <Box>
                    <SimpleGrid columns={2} spacing={5}>
                        {
                            pokemons?.pages?.map((item) => {
                                return item.pokemons.map((val) => {
                                    return <Skeleton isLoaded={isLoaded} rounded='xl' key={val.id}>
                                        <Box>
                                            <CardSquare id={val.id} name={val.name} image={val.sprites?.other.home.front_default} />
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