import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGrid } from '../components/grids'
import thumbInkDrop from '../public/images/mouse.png'
import thumbSlime from '../public/images/thumbSlime.png'
import thumbNookDrop from '../public/images/mouse.png'
import thumbDungeonDrop from '../public/images/mouse.png'

const Works = () => (
        <Container>
            <Section>
                <Heading as = "h3" fontSize = {20} mb = {4}>
                    Projects
                </Heading>
                <SimpleGrid columns = {[1,1,2]} gap = {6}>
                   <Section>
                    <WorkGrid id = "inkdrop" title = "Revenge of Slime" thumbnail = {thumbSlime}>
                        A 2d roguelike game made with JavaScript, HTML, and CSS. 
                        Find your way through hordes of mobs and find the best weapons to stay alive!
                    </WorkGrid>
                    </Section> 
                    <Section>
                        <WorkGrid id = "FocusNook" title = "FocusNook" thumbnail = {thumbInkDrop}>
                            A task management tool that enhances productivity.
                        </WorkGrid>
                    </Section>
                </SimpleGrid>
            </Section>
        </Container>
)


export default Works