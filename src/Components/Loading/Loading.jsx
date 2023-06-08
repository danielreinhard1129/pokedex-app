import React from 'react'
import { Spinner, Flex } from '@chakra-ui/react'

function Loading() {
    return (
        <Flex justify='center' pt='5' pb='32'>
            <Spinner thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl' />
        </Flex>
    )
}

export default Loading