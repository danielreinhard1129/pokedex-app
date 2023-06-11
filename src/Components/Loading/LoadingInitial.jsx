import { Flex, Image, Spinner } from '@chakra-ui/react'
import loadingPicture from '../../Assets/loadingInitial.png'

function LoadingInitial() {
    return (
        <Flex flexDir={'column'} w='full' h='100vh' justifyContent='center' alignItems='center' bgColor={'#0e1f40'}>
            <Image src={loadingPicture} />
            <Spinner color='yellow' size={'xl'} />
        </Flex>
    )
}

export default LoadingInitial