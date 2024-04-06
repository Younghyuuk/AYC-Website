import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGrid } from '../components/grids'
import thumbSlime from '../public/images/thumbnails/thumbnailSlime.png'
import thumbNook from '../public/images/thumbnails/thumbnailNook.png'
import thumbResearch from '../public/images/thumbnails/thumbnailResearch.png'
import thumbDungeon from '../public/images/thumbnails/thumbnailDungeon.png'

const Projects = () => (
        <Container>
            <Section>
                <Heading as = "h3" fontSize = {20} mb = {4}>
                    Projects
                </Heading>
                <SimpleGrid columns = {[1,1,2]} gap = {6}>
                    <Section delay={0.1}>
                    <WorkGrid id = "BioDegen" title = "BioDegen Research" thumbnail = {thumbResearch}>
                    An interdisciplinary research project to create an automata simulation to studies genetic evolution.
                    
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