import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Image, 
    Heading, 
    Link,
    useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcont } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraphStyle'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/biography'

const Page = () => {
    return (
        <Container> 
            <Box borderRadius = "lg" bg = {useColorModeValue('whiteAlpha.700', 'whiteAlpha.500')} p = {3} mb = {5} align = "center">
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
                        height = "120"
                        display = "inline-block" 
                        borderRadius = "full"
                        src = "/images/Profile.jpg" 
                        alt = "Profile Image" 
                    />
                </Box>
            </Box>

            <Section delay = {0.1}>
                <Heading as="h3" variant = "section-title">
                Work
                </Heading>
                <Paragraph>
                    Paragraph
                </Paragraph>
                <Box align = "center" my = {4}>
                    <NextLink href = "/work">
                    <Button rightIcon = {<ChevronRightIcon />} colorScheme = "teal" variant = "outline">
                        My Portfolio
                    </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay = {0.2}>
                <Heading as = "h3" variant = "section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear> 
                    Born in Los Angeles, California.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear> 
                    Started my Bachelor&apos;s at the University of Washington Tacoma.
                </BioSection>
                <BioSection>
                    <BioYear>June 2024</BioYear> 
                    Expected to finish Bachelor&apos;s.
                </BioSection>
            </Section>
        </Container>
        
    )
}

export default Page;