import { useToast } from '@chakra-ui/react'

function Toast(props) {
    const toast = useToast()
    return (
        toast({
            title: props.name,
            description: props.description,
            status: props.status,
            duration: 2500,
            isClosable: true,
        })
    )
}

export default Toast