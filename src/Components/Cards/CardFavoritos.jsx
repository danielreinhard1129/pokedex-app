import { Box, Card, Heading, Image, ButtonGroup, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import noImage from '../../Assets/noImage.png'



function CardFavoritos(props) {
    const navigate = useNavigate();

    return (
        <Card
            direction={'row'}
            overflow='hidden'
            variant='outline'
            alignItems={'center'}
            bgColor='#0E1F40'
            p='5'
            rounded={'xl'}
            h='180px'
        >
            <Box mx='4px'>
                <Image
                    objectFit='cover'
                    w='120px'
                    h='120px'
                    src={props.image ? props.image : noImage}
                    alt='Pokemon'
                    rounded='lg'
                    mr='6'
                />
            </Box>

            <Box color={'white'} alignContent='center'>
                <Heading size={{ base: 'xs' }} mb='2'>{props.name}</Heading>
                <Text fontSize={{ base: '2xs', md: 'xs' }} noOfLines={1}>
                    Pikachu pikachu pikachu pikachu pikachu pikachu
                </Text>
                <Text fontSize={{ base: '2xs', md: 'xs' }} noOfLines={1}>
                    Pikachu pikachu pikachu pikachu pikachu pikachu
                </Text>
                <Text fontSize={{ base: '2xs', md: 'xs' }} noOfLines={1}>
                    Pikachu pikachu pikachu pikachu pikachu pikachu
                </Text>
                <Box textAlign={'end'} mt='2'>
                    <ButtonGroup size={'xs'} textAlign='center' spacing='0'>
                        <Button bgColor={'transparent'} _hover={{}} >
                            <AiOutlineHeart style={{ color: 'white', fontSize: '20px' }} />
                        </Button>
                        <Button bgColor='#FF7A2E' textColor={'white'} rounded='lg' fontSize={'xs'}
                            onClick={() => navigate(`/detail/${props.id}`)}>
                            Detalhes
                        </Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Card >
    )
}

export default CardFavoritos