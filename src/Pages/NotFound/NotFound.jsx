import React from 'react'
import { Flex, Image, Stack, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import notFound from '../../Assets/notFound.png'


function NotFound() {
    const navigate = useNavigate();

    return (
        <Flex bgColor={'#f9f9f9'} justifyContent={'center'} alignItems='center' h='100vh'>
            <Stack alignItems={'center'} spacing='10'>
                <Image src={notFound} w='full' h='full' />
                <Button onClick={() => navigate('/')}
                    color='white' bgColor={'#0E1F40'} rounded='xl'
                    _hover={{}}
                    w='50%'>
                    Return Home
                </Button>
            </Stack>
        </Flex>
    )
}

export default NotFound