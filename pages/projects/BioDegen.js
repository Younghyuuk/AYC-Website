import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphStyle'
import Layout from '../../components/layouts/pageTransition'

const Work = () => {
    return (
        <Layout title="BioDegen">
            <Container>
                <Title>
                    BioDegen <Badge>2024 – 2026</Badge>
                </Title>

                <P>
                    <strong>BioDegen</strong> is an interdisciplinary research project that uses automata simulations to explore biodegenerative processes. 
                    Conducted with <Link href="https://www.tacoma.uw.edu/sias/marriott" isExternal color="teal.300">
                        Professor Marriott <ExternalLinkIcon mx="2px" />
                    </Link> at the University of Washington Tacoma, the project simulates genotype-environment interactions in AI agents over multiple generations.
                </P>

                <P>
                    With robust data collection and parameter sweeps, BioDegen enables visualization and statistical analysis of genetic effects on agent behavior, health degradation, and adaptation over time. The results help us form testable hypotheses for evolutionary patterns under simulated environmental pressures.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Simulation</Meta>
                        <Link href="https://algorithm0r.github.io/BioDegen/" isExternal>
                            BioDegen Live Demo <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        JavaScript, Python, MongoDB, HTML, CSS
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href="https://github.com/Younghyuuk/BioDegen" isExternal>
                            GitHub Repo <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/bioDegenFull.png" alt="BioDegen Full View" />
                <WorkImage src="/images/bioBox.png" alt="BioDegen Genetic Box" />
                <WorkImage src="/images/L03M2.png" alt="BioDegen Genetic Trends Graph" />
            </Container>
        </Layout>
    )
}

export default Work
