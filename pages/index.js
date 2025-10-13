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
                    Hello, I&apos;m a fullstack developer in Washington state!
                </Box>
                <Box display  = {{md:'flex'}} >
                    <Box flexGrow = {0.8} >   
                        <Heading as = "h2" variant = "page-title"> 
                            Andrew Y. Chon
                        </Heading>
                        <p> M.S. (Thesis) Student - Computer Science
                            Washington State University (January 2026) </p>
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
                    About
                    </Heading>
                    <Paragraph>
                    
                    Based in Auburn, Washington, I&apos;m a software developer and incoming master&apos;s student at WSU focused on building 
                    research-driven, user-centered solutions. My recent work includes research on automata simulations and AI for biological data 
                    with the University of Washington Tacoma. I specialize in building reproducible pipelines, 
                    interactive platforms, and game-inspired applications.
                    My projects include; BioDegen, a simulation platform to study genotype-environment interactions, Revenge of Slime a
                    custom-designed 2D rogue-lite game, FocusNook a React-based productivity web app, DungeonAdventure a 2D Java-based 
                    dungeon auto-battler
                    When I&apos;m not coding or researching, I enjoy exploring new games, weightlifting, and learning about tech-driven solutions.
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
                        <BioYear>🎉 2002</BioYear> 
                        Born in Los Angeles, California.
                    </BioSection>
                    <BioSection>
                        <BioYear>🏫 2016</BioYear> 
                        Started highschool at Auburn Riverside Highschool.
                    </BioSection>
                    <BioSection>
                        <BioYear>🎓 2020</BioYear> 
                        Started my Bachelor&apos;s at the University of Washington Tacoma.
                    </BioSection>
                    <BioSection>
                        <BioYear>🔬 January 2024</BioYear> 
                        Started research at the University of Washington Tacoma with Professor Marriott on BioDegen.
                    </BioSection>
                    <BioSection>
                        <BioYear>🎓 June 2024</BioYear> 
                        Completed my Bachelor&apos;s in computer science.
                    </BioSection>
                    <BioSection>
                        <BioYear>🎓 January 2026</BioYear> 
                        Completed my Bachelor&apos;s in computer science.
                    </BioSection>
                    <BioSection>
                        <BioYear>📝 March 2026</BioYear> 
                        Expected date for BioDegen manuscript.
                    </BioSection>
                    
                </Section>

               <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Skills
                    </Heading>

                    <List spacing={3} pl={4}>
                        <ListItem>
                        <b>💻 Languages:</b> JavaScript, TypeScript, Python, Java, R
                        </ListItem>

                        <ListItem>
                        <b>⚙️ Frameworks & Libraries:</b> React, Next.js, Node.js, Chakra UI
                        </ListItem>

                        <ListItem>
                        <b>🗄️ Databases:</b> MongoDB, MySQL, SQL
                        </ListItem>

                        <ListItem>
                        <b>☁️ Cloud & Tools:</b> AWS, Google Cloud, Docker (basic)
                        </ListItem>

                        <ListItem>
                        <b>📊 Data & Research:</b> NumPy, scikit-learn, data pipelines, reproducibility workflows
                        </ListItem>

                        <ListItem>
                        <b>🧰 Other:</b> Git, CSS, HTML, JUnit, Agile Methodologies
                        </ListItem>
                    </List>
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