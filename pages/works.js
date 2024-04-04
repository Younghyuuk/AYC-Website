import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'

const Works = () => {
    return (
        <Container>
            <Section>
                <Heading as = "h1" variant = "section-title">
                    Works
                </Heading>
                <Divider />
                <SimpleGrid columns = {1} spacing = {4}>
                    <div>
                        <p>Here are some of the projects I have worked on:</p>
                    </div>
                </SimpleGrid>
            </Section>
        </Container>
    )
}