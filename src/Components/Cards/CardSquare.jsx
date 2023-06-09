import { Button, ButtonGroup, Card, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { AiFillHeart, AiFillInfoCircle, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstWord } from '../../helper/capitalizeFirstWord';
import { checkIsLiked } from '../../helper/checkIsLiked';
import { useUpdateFavourite } from '../../hooks/useUpdateFavourite';
import Toast from '../Toast/Toast';


function CardSquare(props) {
    const navigate = useNavigate();

    const { handleLike, isLoadingUnlike, isLoadingLike, isError, error } = useUpdateFavourite(props.getPokemons)

    const exist = checkIsLiked(props?.allFavourite, props.id)

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
                    onClick={() => navigate(`/detail/${props.id}`)}
                    cursor='pointer'
                    _hover={{ transform: 'scale(1.1)' }}
                />
                capita
                <Heading size='sm' mb='2' color={'white'}>{capitalizeFirstWord(props.name)}</Heading>
                <ButtonGroup size='xs' bgColor={'#263C66'} rounded='full' px='4' alignItems={'center'}>
                    <Button _hover={{ transform: 'scale(1.3)' }} _active='none' isLoading={isLoadingLike || isLoadingUnlike ? true : false} color='white' bgColor='transparent' onClick={() => handleLike(props.id)}>
                        {exist ? <AiFillHeart style={{ color: 'red', fontSize: '15px' }} /> : <AiOutlineHeart style={{ color: 'white', fontSize: '15px' }} />}
                    </Button>
                    <Button _hover={{ transform: 'scale(1.2)' }} _active='none' bgColor='transparent' onClick={() => navigate(`/detail/${props.id}`)}>
                        <AiFillInfoCircle style={{ color: 'white', fontSize: '15px' }} />
                    </Button>
                </ButtonGroup>
            </Stack>
            {isError && <Toast name='Error' description={error.message} status='error' />}
        </Card>
    )
}

export default CardSquare