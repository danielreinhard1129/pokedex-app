import { Box, Button, ButtonGroup, Card, Heading, Image, Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import noImage from '../../Assets/noImage.png';
import { capitalizeFirstWord } from '../../helper/capitalizeFirstWord';
import { checkIsLiked } from '../../helper/checkIsLiked';
import { useUpdateFavourite } from '../../hooks/useUpdateFavourite';
import Toast from '../Toast/Toast';



function CardRectangleWithLine(props) {
    const { handleLike, isLoadingUnlike, isLoadingLike, isError, error } = useUpdateFavourite(props.getPokemons)

    const exist = checkIsLiked(props?.allFavourite, props?.id)

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
            <Box mx='4px' w='30%'>
                <Image
                    objectFit='cover'
                    w='120px'
                    h='120px'
                    src={props.image ? props.image : noImage}
                    alt='Pokemon'
                    rounded='lg'
                    mr='6'
                    _hover={{ transform: 'scale(1.1)' }}
                />
            </Box>

            <Box color={'white'} alignContent='center' w='75%'>
                <Heading size={{ base: 'xs' }} mb='2'>{capitalizeFirstWord(props.name)}</Heading>
                {
                    <Box>
                        {
                            props?.types?.map((val, idx) => {
                                return <Tag size='md' borderRadius='full' variant={'solid'} key={idx} mr='2'>
                                    <TagLabel fontSize='xs'>{capitalizeFirstWord(val.type.name)}</TagLabel>
                                </Tag>
                            })
                        }
                    </Box>
                }
                <Box textAlign={'end'} mt='2'>
                    <ButtonGroup size={'xs'} textAlign='center' spacing='0'>
                        <Button _hover={{ transform: 'scale(1.3)' }} _active='none' isLoading={isLoadingLike || isLoadingUnlike ? true : false} color='white' bgColor='transparent' onClick={() => handleLike(props.id)}>
                            {exist ? <AiFillHeart style={{ color: 'red', fontSize: '20px' }} /> : <AiOutlineHeart style={{ color: 'white', fontSize: '20px' }} />}
                        </Button>
                    </ButtonGroup>
                </Box>

                {isError && <Toast name='Error' description={error.message} status='error' />}

            </Box>
        </Card >
    )
}

export default CardRectangleWithLine