import { Progress } from '@chakra-ui/react'

import React from 'react'

function ProgressBar(props) {
    return (
        <Progress value={props.value} bgColor='#091733' colorScheme={'orange'} />
    )
}

export default ProgressBar