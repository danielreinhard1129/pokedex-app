import { Box, Card, Heading, Image, ButtonGroup, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { capitalizeFirstWord } from '../../helper/capitalizeFirstWord';
import { useNavigate } from 'react-router-dom';


function CardRectangle(props) {
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
        >
            <Box mx='4px'>
                <Image
                    objectFit='cover'
                    w='100px'
                    h='100px'
                    src={props.pokemon?.sprites?.other?.home?.front_default}
                    alt='Pokemon'
                />
            </Box>

            <Box color={'white'}>
                <Heading size={{ base: 'xs' }} mb='2'>{props.pokemon?.name}</Heading>
                <Text fontSize={{ base: '2xs', md: 'xs' }} noOfLines={1}>
                    Pikachu pikachu pikachu pikachu pikachu
                </Text>
                <Text fontSize={{ base: '2xs', md: 'xs' }} noOfLines={1}>
                    Pikachu pikachu pikachu pikachu pikachu
                </Text>
                <Text fontSize={{ base: '2xs', md: 'xs' }} noOfLines={1}>
                    Pikachu pikachu pikachu pikachu pikachu
                </Text>
                <Box textAlign={'end'} mt='2'>
                    <ButtonGroup size={'xs'} textAlign='center' spacing='0'>
                        <Button bgColor={'transparent'} _hover={{}} >
                            <AiOutlineHeart style={{ color: 'white', fontSize: '15px' }} />
                        </Button>
                        <Button bgColor='#FF7A2E' textColor={'white'} rounded='lg' fontSize={'xs'}
                            onClick={() => navigate(`/detail/${props.pokemon.id}`)}>
                            ver mais
                        </Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Card >
    )
}

export default CardRectangle