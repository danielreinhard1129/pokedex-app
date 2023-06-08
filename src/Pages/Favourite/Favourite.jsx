import React from 'react'
import { Box, Button, Heading, Flex, Skeleton, Text, SimpleGrid } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import CardFavoritos from '../../Components/Cards/CardFavoritos'



function Favourite() {
    const params = useParams()
    const navigate = useNavigate()


    return (
        <Box bgColor={'#F2F2F2'} minH={'100vh'} px='6'>
            <Box h={'100%'}>
                <Box pt='10' pb='2' gap={'4'} alignItems='center'>
                    <Heading size='lg' fontWeight={'semibold'}>
                        Favoritos
                    </Heading>
                </Box>

                {/* CARD */}
                {/* <Box mb='4'>
                    <Skeleton isLoaded={!isLoading} rounded='xl'>
                        <CardRectangleWithLine name={data?.name} image={data?.sprites?.other.home.front_default} />
                    </Skeleton>
                </Box> */}

                <Box mb='4'>
                    <Skeleton isLoaded={true}>
                        <CardFavoritos id image name />
                    </Skeleton>
                </Box>
                <Text textAlign='center' fontSize='sm' fontWeight='semibold'>Vocé tem 1 pokemon favorito</Text>

            </Box>
        </Box>
    )
}

export default Favourite