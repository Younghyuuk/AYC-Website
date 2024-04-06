import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
           
                <Heading as = "h1" fontSize = {24} mb = {4} align = "center">
                    Not Found
                </Heading>
                <Text align = "center">
                    The page you are looking for does not exist.
                </Text>
                <Divider my = {6}/>
                <Box my = {6} align = "center"> 
                    <NextLink href = "/">
                        <Button colorScheme = "teal">
                            Go back home
                        </Button>
                    </NextLink>
                </Box>
        </Container>
    )
}

export default NotFound