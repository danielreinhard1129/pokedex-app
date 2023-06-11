import React from 'react'
import { Flex, Button, Text, Badge, Box } from '@chakra-ui/react'
import { TbPokeball } from 'react-icons/tb';
import { FaBookmark } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import BackToTop from '../Buttons/BackToTop';



function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const listFavouritePokemon = useSelector((state) => state.favourite.data)


    let isValid;
    let isVisible;

    if (location.pathname === '/') {
        isValid = true
        isVisible = true
    } else if (location.pathname.includes('/detail')) {
        isValid = true
        isVisible = false
    } else if (location.pathname === '/favourite') {
        isValid = true
        isVisible = true
    } else {
        isValid = false
        isVisible = false
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Flex pos={'relative'} w='full' justifyContent={'center'} display={isValid ? 'flex' : 'none'}>
            <Flex border={'1px solid gray'} bgColor={'#0E1F40'} shadow='2xl' position='fixed' bottom={'5'} justifyContent='space-evenly' w={{ base: '75%', sm: '350px', md: '350px' }} py='2' rounded={'xl'}>
                <Button _hover={{ transform: 'scale(1.2)' }} _active='none' bgColor={'#0E1F40'} py='7'
                    onClick={() => {
                        navigate('/')
                        scrollToTop()
                    }}>
                    <Flex flexDir={'column'} alignItems='center'>
                        <TbPokeball style={{ fontSize: '30px', color: location.pathname === '/' ? 'white' : 'gray' }} />
                        <Text fontSize={'xs'} color={location.pathname === '/' ? 'white' : 'gray'}>Home</Text>
                    </Flex>
                </Button>
                <Box pos='relative'>
                    <Button _hover={{ transform: 'scale(1.2)' }} _active='none' bgColor={'#0E1F40'} py='7'
                        onClick={() => {
                            navigate('/favourite')
                            scrollToTop()
                        }}>
                        <Flex flexDir={'column'} alignItems='center'>
                            <Badge pos={'absolute'} right='6' top='-0.5' bgColor={'red'} color='white' rounded={'full'}>{listFavouritePokemon.length}</Badge>
                            <FaBookmark style={{ fontSize: '30px', color: location.pathname === '/favourite' ? 'white' : 'gray' }} />
                            <Text fontSize={'xs'} color={location.pathname === '/favourite' ? 'white' : 'gray'}>Favorites</Text>
                        </Flex>
                    </Button>
                </Box>

                <Box _hover={{ transform: 'scale(1.2)' }} pos='absolute' right='-4' top='-5' display={isVisible ? 'block' : 'none'}>
                    <BackToTop />
                </Box>

            </Flex >
        </Flex >
    )
}

export default Navbar