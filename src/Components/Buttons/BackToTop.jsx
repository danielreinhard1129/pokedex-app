import { IconButton } from '@chakra-ui/react';
import { HiOutlineArrowCircleUp } from 'react-icons/hi';

function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <IconButton icon={<HiOutlineArrowCircleUp />} onClick={scrollToTop} fontSize='4xl' variant={'unstyled'} color='#ff7a2e' rounded='full' />
        </>
    )
}

export default BackToTop