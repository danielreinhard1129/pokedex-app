import { Box, Divider, Heading, Skeleton, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardFavoritos from '../../Components/Cards/CardFavoritos'
import Toast from '../../Components/Toast/Toast'
import { useFetchFavourite } from '../../hooks/useFetchFavourite'




function Favourite(props) {
    const [isLoading, setIsloading] = useState(true);
    setTimeout(() => {
        setIsloading(false)
    }, 1200)

    const listFavouritePokemon = useSelector((state) => state.favourite.data)
    const { data, refetch, isError, error } = useFetchFavourite(listFavouritePokemon)


    useEffect(() => {
        if (listFavouritePokemon) {
            refetch()
        }
    }, [listFavouritePokemon])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



    return (
        <Box bgColor={'#F2F2F2'} minH={'100vh'} px='6'>
            <Box h={'100%'}>
                <Box pt='10' pb='2' gap={'4'} alignItems='center'>
                    <Heading size='lg' fontWeight={'semibold'}>
                        Favoritos
                    </Heading>
                </Box>
                <Box mb='4'>
                    {
                        isLoading ?
                            <Skeleton h='180px' rounded='xl'></Skeleton>
                            :
                            data?.map((val) => {
                                return <CardFavoritos getPokemons={props.getPokemons} allFavourite={props.allFavourite} id={val?.id} name={val?.name} types={val?.types} image={val?.sprites?.other.home.front_default} key={val?.id} />
                            })
                    }
                </Box>
                <Skeleton isLoaded={!isLoading}>
                    <Text textAlign='center' fontSize='sm' fontWeight='semibold'>Vocé tem {data?.length} pokemon favorito</Text>
                </Skeleton>
                <Divider pb='32' />
                {isError && <Toast name='Error' description={error.message} status='error' />}
            </Box>
        </Box>
    )
}

export default Favourite