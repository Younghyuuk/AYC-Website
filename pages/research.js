import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGrid } from '../components/grids'
import Layout from '../components/layouts/pageTransition'

import thumbResearch from '../public/images/thumbnails/thumbnailResearch.png'

const Research = () => (
  <Layout title="Research">
    <Container>
      <Section>
        <Heading as="h3" fontSize={20} mb={4}>
          Research
        </Heading>
        <Text fontSize={14} color="gray.400" mb={4}>
          Click on the image to learn more about the build.
        </Text>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGrid
              id="BioDegen"
              title="BioDegen Research"
              thumbnail={thumbResearch}
            >
             An interdisciplinary research project to create an automata simulation to study genetics.
            </WorkGrid>
          </Section>
        </SimpleGrid>
      </Section>
      <Text align="center" mt={10} fontSize={14} color="gray.500">
        🚧 More research projects will be added soon — stay tuned!
      </Text>

    </Container>
  </Layout>
)

export default Research
