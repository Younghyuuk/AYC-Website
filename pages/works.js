import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGrid } from '../components/grids'
import thumbSlime from '../public/images/thumbSlime3.png'
import thumbNook from '../public/images/thumbNook.png'
import thumbDungeonDrop from '../public/images/mouse.png'

const Works = () => (
        <Container>
            <Section>
                <Heading as = "h3" fontSize = {20} mb = {4}>
                    Projects
                </Heading>
                <SimpleGrid columns = {[1,1,2]} gap = {6}>
                   <Section delay={0.3}>
                    <WorkGrid id = "inkdrop" title = "Revenge of Slime" thumbnail = {thumbSlime}>
                        A 2d roguelike game that a team of 3 developers created in 7 weeks.
                    </WorkGrid>
                    </Section> 
                    <Section delay = {0.6}>
                        {/* <Divider my = {6}/> */}
                        <WorkGrid id = "FocusNook" title = "FocusNook" thumbnail = {thumbNook}>
                            A task management tool that enhances productivity.
                        </WorkGrid>
                    </Section>
                </SimpleGrid>
            </Section>
        </Container>
)


export default Works