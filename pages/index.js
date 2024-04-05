import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Image, 
    Heading, 
    Link,
    List,
    ListItem,
    useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layouts/pageTransition'
import Section from '../components/section'
import Paragraph from '../components/paragraphStyle'
import { BioSection, BioYear } from '../components/biography'

const Page = () => {
    return (
        <Layout>
            <Container> 
                <Box borderRadius = "lg" bg = {useColorModeValue('whiteAlpha.700', 'whiteAlpha.500')} p = {3} mb = {5} align = "center">
                    Hello, I&apos;m a full-time student in Washington state!
                </Box>
                <Box display  = {{md:'flex'}} >
                    <Box flexGrow = {0.8} >   
                        <Heading as = "h2" variant = "page-title"> 
                            Andrew Y. Chon
                        </Heading>
                        <p> Aspiring Software Developer </p>
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
                            maxWidth = "120px" 
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
                    Based in Auburn, Washington, I'm a full-stack developer passionate about creating digital solutions, 
                    from AI simulations for scientific research to immersive web and game development. My projects include BioDegen, 
                    an AI simulation study on biodegenerative processes with the University of Washington; Revenge of Slime, 
                    a custom-designed web game; FocusNook, a React-based task management tool; and DungeonAdventure,
                    a 2D Java game with auto-battle mechanics in randomly generated dungeons.
                    When I'm not coding you can finding me either working out or playing video games depending on the day.
                    </Paragraph>
                    <Box align = "center" my = {4}>
                        <NextLink href = "/projects">
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
                        <BioYear>2016</BioYear> 
                        Started highschool at Auburn Riverside Highschool.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear> 
                        Started my Bachelor&apos;s at the University of Washington Tacoma.
                    </BioSection>
                    <BioSection>
                        <BioYear>Winter 2023</BioYear> 
                        Started research at the University of Washington Tacoma with Professor Marriott.
                    </BioSection>
                    <BioSection>
                        <BioYear>June 2024</BioYear> 
                        Complete my Bachelor&apos;s in computer science.
                    </BioSection>
                </Section>

                <Section delay = {0.3}>
                    <Heading as = "h3" variant = "section-title">
                        Skills
                    </Heading>
                    <Paragraph>
                        JavaScript, Java, Node.js, React, Next.js, MongoDB, SQL, Git, CSS, HTML, JUnit, Agile Methodologies.
                    </Paragraph>
                </Section>

                <Section delay = {0.3}>
                    <Heading as = "h3" variant = "section-title">
                        Hobbies
                    </Heading>
                    <Paragraph>
                        Video Games, Anime/Cartoons, Working out, Music, PC building, Keyboard building.
                    </Paragraph>
                </Section>
               
                <Section delay = {0.3}>
                    <Heading as = "h3" variant = "section-title">
                        Github
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/Younghyuuk" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    @Younghyuk
                                </Button>
                            </Link>
                    </ListItem>
                </List>
                </Section>

                <Section delay = {0.3}>
                    <Heading as = "h3" variant = "section-title">
                        Based On
                    </Heading>
                    <Paragraph>
                    <Link href="https://www.craftz.dog/" target="_blank">
                             Takuya Matsuyama
                    </Link>
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;