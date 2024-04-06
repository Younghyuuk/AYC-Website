import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphStyle'
import Layout from '../../components/layouts/pageTransition'

const Work = () => {
    return (
        <Layout title = "Dungeon">
            <Container>
                <Title>
                    Dungeon Adventure <Badge>2023</Badge>
                </Title>
                <P>
                    A 2d tile based game with 3 distinct classes (Ninja, Knight, and Priest) you must traverse a randomly generated dungeon and find all the keys to escape. With a simple
                    combat system and a variety of enemies to fight. 
                    The game was created in 8 weeks with the goal of creating a fun and interactive game that was simple to play and easy to understand. 
                    Random items and doors will be available to you throughout the dungeon and each item will give you a different perk in the game 
                    to help you survive longer. 
                    With an auto battle system and streamlined inventory the game was created in Java with SQLite for data storage and used 
                    Serialization to allow players to save and load their game state.
                </P>
                <List ml = {4} my = {4}>    
                    <ListItem>
                        <Meta>Stack</Meta> 
                        <span>Java, SQLite, Serialization </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta> 
                        <Link href = "https://github.com/Younghyuuk/Dungeon-Adventure" 
                        isExternal>Code<ExternalLinkIcon mx = "2px"/></Link>
                    </ListItem>
                </List>
                
                <WorkImage src = "/images/thumbnails/thumbnailDungeon.png" alt = "Main" />
                {/* <SimpleGrid columns={2} gap={4}> */}
                    <WorkImage src = "/images/spawnDungeon.png" alt = "Spawn" />
                    <WorkImage src = "/images/keysDun.png" alt = "Keys" />
                {/* </SimpleGrid> */}
                    <WorkImage src = "/images/gameWon.png" alt = "Dungeon beat" />
               
            </Container>
        </Layout>
    )
}

export default Work