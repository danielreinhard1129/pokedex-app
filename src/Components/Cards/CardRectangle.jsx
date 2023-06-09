import { Box, Button, ButtonGroup, Card, Heading, Image, Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import noImage from '../../Assets/noImage.png';
import { capitalizeFirstWord } from '../../helper/capitalizeFirstWord';
import { checkIsLiked } from '../../helper/checkIsLiked';
import { useUpdateFavourite } from '../../hooks/useUpdateFavourite';
import Toast from '../Toast/Toast';


function CardRectangle(props) {
    const navigate = useNavigate();

    const { handleLike, isLoadingUnlike, isLoadingLike, isError, error } = useUpdateFavourite(props.getPokemons)

    const exist = checkIsLiked(props?.allFavourite, props?.pokemon?.id)


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
            <Box mx='4px' w='30%'>
                <Image
                    objectFit='cover'
                    w='full'
                    h='100px'
                    src={props.pokemon?.sprites?.other?.home?.front_default ? props.pokemon?.sprites?.other?.home?.front_default : noImage}
                    alt='Pokemon'
                />
            </Box>

            <Box color={'white'} w='70%' ml='2'>
                <Heading size={{ base: 'md' }} mb='2'>{capitalizeFirstWord(props.pokemon?.name)}</Heading>
                <Box>
                    {
                        props?.pokemon?.types?.map((val, idx) => {
                            return <Tag size='md' borderRadius='full' variant={'solid'} key={idx} mr='2'>
                                <TagLabel fontSize='xs'>{capitalizeFirstWord(val.type.name)}</TagLabel>
                            </Tag>
                        })
                    }
                </Box>

                <Box textAlign={'end'} mt='2' w='full'>
                    <ButtonGroup size={'xs'} textAlign='center' spacing='0'>
                        <Button _hover={{ transform: 'scale(1.2)' }} _active='none' isLoading={isLoadingLike || isLoadingUnlike ? true : false} color='white' bgColor='transparent' onClick={() => handleLike(props.pokemon.id)}>
                            {exist ? <AiFillHeart style={{ color: 'red', fontSize: '15px' }} /> : <AiOutlineHeart style={{ color: 'white', fontSize: '15px' }} />}
                        </Button>
                        <Button _hover={{ transform: 'scale(1.1)' }} _active='none' bgColor='#FF7A2E' textColor={'white'} rounded='lg' fontSize={'xs'}
                            onClick={() => navigate(`/detail/${props.pokemon.id}`)}>
                            ver mais
                        </Button>
                    </ButtonGroup>
                </Box>

                {isError && <Toast name='Error' description={error.message} status='error' />}

            </Box>
        </Card >
    )
}

export default CardRectangle