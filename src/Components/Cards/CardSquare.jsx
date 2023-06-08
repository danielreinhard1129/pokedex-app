import React from 'react'
import { Card, Stack, Image, Heading, ButtonGroup, Button } from '@chakra-ui/react'
import imagePokemon from '../../Assets/1.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import { capitalizeFirstWord } from '../../helper/capitalizeFirstWord';
import { useNavigate } from 'react-router-dom';



function CardSquare(props) {
    const navigate = useNavigate();

    return (
        <Card
            rounded='xl'
            h='190px'
            bgColor={'#0E1F40'}
        >
            <Stack alignItems={'center'} spacing='0'>
                <Image
                    objectFit='cover'
                    w={'120px'}
                    h='120px'
                    src={props.image}
                    alt='Caffe Latte'
                />
                capita
                <Heading size='sm' mb='2' color={'white'}>{props.name}</Heading>
                <ButtonGroup size='xs' bgColor={'#263C66'} rounded='full' px='4' alignItems={'center'}>
                    <Button _hover={{}} bgColor='transparent'>
                        <AiOutlineHeart style={{ color: 'white', fontSize: '15px' }} />
                    </Button>
                    <Button _hover={{}} bgColor='transparent' onClick={() => navigate(`/detail/${props.id}`)}>
                        <AiFillInfoCircle style={{ color: 'white', fontSize: '15px' }} />
                    </Button>
                </ButtonGroup>
            </Stack>
        </Card>
    )
}

export default CardSquare