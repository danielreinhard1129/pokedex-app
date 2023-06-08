import React from 'react'
import { Flex, Button, Text, Badge } from '@chakra-ui/react'
import { TbPokeball } from 'react-icons/tb';
import { FaBookmark } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    let isValid;

    if (location.pathname === '/') {
        isValid = true
    } else if (location.pathname.includes('/detail')) {
        isValid = true
    } else if (location.pathname === '/favourite') {
        isValid = true
    } else {
        isValid = false
    }

    console.log(isValid);



    return (
        <Flex pos={'relative'} w='full' justifyContent={'center'} display={isValid ? 'flex' : 'none'} >
            <Flex bgColor={'#0E1F40'} shadow='xl' position='fixed' bottom={'5'} justifyContent='space-evenly' w={{ base: '75%', sm: '350px', md: '350px' }} py='2' rounded={'xl'}>
                <Button bgColor={'#0E1F40'} py='7' onClick={() => navigate('/')}>
                    <Flex flexDir={'column'} alignItems='center'>
                        <TbPokeball style={{ fontSize: '30px', color: 'white' }} />
                        <Text fontSize={'xs'} color='white'>Home</Text>
                    </Flex>
                </Button>
                <Button bgColor={'#0E1F40'} py='7' onClick={() => navigate('/favourite')}>
                    <Flex flexDir={'column'} alignItems='center' position={'relative'}>
                        <Badge pos={'absoulte'} right='0' >0</Badge>
                        <FaBookmark style={{ fontSize: '30px', color: 'white' }} />
                        <Text fontSize={'xs'} color='white'>Favorites</Text>
                    </Flex>
                </Button>
            </Flex >
        </Flex >
    )
}

export default Navbar