import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGrid } from '../components/grids'
import thumbSlime from '../public/images/thumbSlime.png'
import thumbNook from '../public/images/thumbNook.png'
import thumbResearch from '../public/images/thumbResearch.png'
import thumbDungeon from '../public/images/thumbDungeon.png'

const Projects = () => (
        <Container>
            <Section>
                <Heading as = "h3" fontSize = {20} mb = {4}>
                    Projects
                </Heading>
                <SimpleGrid columns = {[1,1,2]} gap = {6}>
                    <Section delay={0.1}>
                    <WorkGrid id = "BioDegen" title = "BioDegen Research" thumbnail = {thumbResearch}>
                    Create an automata simulation that uses agents to studies human evolution and biodegenerative processes.
                    This was an interdisciplinary research project done with Professor Marriott.
                    </WorkGrid>
                    </Section> 
                   <Section delay={0.4}>
                    <WorkGrid id = "Slime" title = "Revenge of Slime" thumbnail = {thumbSlime}>
                        A 2d roguelike game that a team of 3 developers created in 7 weeks.
                    </WorkGrid>
                    </Section> 
                    <Section delay = {0.6}>
                        <WorkGrid id = "FocusNook" title = "FocusNook" thumbnail = {thumbNook}>
                            A task management tool that enhances productivity.
                        </WorkGrid>
                    </Section>
                    <Section delay = {0.8}>
                        <WorkGrid id = "Dungeon" title = "DungeonAdventure" thumbnail = {thumbDungeon}>
                            A game created in Java that allows you to roam a randomly generated dungeon and auto fight monsters.
                        </WorkGrid>
                    </Section>
                </SimpleGrid>
            </Section>
        </Container>
)


export default Projects