import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphStyle'
import Layout from '../../components/layouts/pageTransition'

const Work = () => {
    return (
        <Layout title = "Revenge of Slime">
            <Container>
                <Title>
                    Revenge of Slime <Badge>2024</Badge>
                </Title>
                <P>
                    Revenge of Slime is a game that was created by a team of 3 including myself that was created with the goal of creating a fun and 
                    interactive web game that played like a 2d roguelike shooter. With different weapons to try and auto generated levels the goal of the game
                    is to simply survive for as long as possible. With custom art and custom music the game was created in 7 weeks. If you have the time
                    click on the link below and enjoy!
                </P>
                <List ml = {4} my = {4}>    
                    <ListItem>
                        <Meta>Go play!</Meta> 
                        <Link href = "https://younghyuuk.github.io/Revenge_of_Slime/">
                            Game<ExternalLinkIcon mx = "2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta> 
                        <span>JavaScript, HTML, CSS </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta> 
                        <Link href = "https://github.com/Younghyuuk/Revenge_of_Slime" 
                        isExternal>Code<ExternalLinkIcon mx = "2px"/></Link>
                    </ListItem>
                </List>
                <WorkImage src = "/images/thumbnailSlime.png" alt = "Main slime screen" />
                <WorkImage src = "/images/slimeControls.png" alt = "Slime Controls" />
                <WorkImage src = "/images/slimeGameplay.png" alt = "Gameplay" />
                <WorkImage src = "/images/slimeGameOver.png" alt = "Gameover" />
            </Container>
        </Layout>
    )
}

export default Work