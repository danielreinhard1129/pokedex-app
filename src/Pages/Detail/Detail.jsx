import { Box, Button, Heading, Flex, Skeleton, Divider, SimpleGrid } from '@chakra-ui/react'
import { FaLessThan } from 'react-icons/fa'
import CardRectangleWithLine from '../../Components/Cards/CardRectangleWithLine'
import Progress from '../../Components/Progress/ProgressBar'
import { useFetchDetailPokemon } from '../../hooks/useFetchDetailPokemon'
import { useParams, useNavigate } from 'react-router-dom'
import Toast from '../../Components/Toast/Toast'




function Detail() {
    const params = useParams()
    const navigate = useNavigate()

    const { data, isLoading, isError, error } = useFetchDetailPokemon(params.id)
    // console.log(data.stats)


    return (
        <Box bgColor={'#F2F2F2'} minH={'100vh'} px='4'>
            <Box h={'100%'}>
                <Flex pt='10' pb='2' gap={'4'} alignItems='center'>
                    <Button variant={'unstyled'} textAlign='center' alignItems={'center'} size='xs'
                        onClick={() => navigate('/')}>
                        <FaLessThan style={{ fontSize: '25px', margin: 'auto', }} />
                    </Button>
                    <Heading size='lg' fontWeight={'semibold'}>
                        {data?.name}
                    </Heading>
                </Flex>

                {/* CARD */}
                <Box mb='4'>
                    <Skeleton isLoaded={!isLoading} rounded='xl'>
                        <CardRectangleWithLine name={data?.name} image={data?.sprites?.other.home.front_default} />
                    </Skeleton>
                </Box>

                {/* STATS */}
                <Box pb='2'>
                    <Heading size='lg' fontWeight={'medium'} pb='2'>
                        Habilidades
                    </Heading>
                    <Divider borderColor={'black'} />
                    <Divider borderColor={'black'} />
                </Box>
                <SimpleGrid columns={2} spacing={1} alignItems='center' mt='2'>

                    {data?.stats?.map((val) => {
                        return (
                            <>
                                <Skeleton isLoaded={!isLoading}>
                                    <Box>{val.stat.name}: </Box>
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <Box><Progress value={val.base_stat} /></Box>
                                </Skeleton>
                            </>
                        )
                    })}

                </SimpleGrid>

                {isError && <Toast name={'error'} description={error.message} status={'error'} />}
            </Box>
        </Box>
    )
}

export default Detail