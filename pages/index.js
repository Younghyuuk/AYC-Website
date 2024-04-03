import { 
    Container, 
    Box, 
    Image, 
    Heading, 
    useColorModeValue 
} from '@chakra-ui/react'
import Section from '../components/section'

const Page = () => {
    return (
        <Container> 
            <Box borderRadius = "lg" bg = {useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p = {3} mb = {5} align = "center">
                Hello, I&apos;m a full-stack developer based in the US!
            </Box>
            <Box display  = {{md:'flex'}} >
                <Box flexGrow = {1} >   
                    <Heading as = "h2" variant = "page-title"> 
                        Andrew Chon
                    </Heading>
                    <p> Software Developer </p>
                </Box>
                <Box 
                    flexShrink = {0} 
                    mt = {{ base: 3, md: 0 }} 
                    ml = {{ md: 1 }} 
                    align = "center"
                >
                    <Image borderColor = "whiteAlpha.800" 
                        borderWidth = {2} 
                        borderStyle = "solid" 
                        maxWidth = "110px" 
                        display = "inline-block" 
                        borderRadius = "full"
                        src = "/images/Profile.jpg" 
                        alt = "Profile Image" 
                    />
                </Box>
            </Box>
            <Section delay = {0.1}>
                <Heading as = "h3" variant = "section-title">
                Work
                </Heading>
                <p>
                    Paragraph
                </p>
            </Section>
        </Container>
    )
}

export default Page;