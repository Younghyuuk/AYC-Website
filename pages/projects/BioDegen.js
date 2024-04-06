import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphStyle'
import Layout from '../../components/layouts/pageTransition'

const Work = () => {
    return (
        <Layout title = "BioDegen">
            <Container>
                <Title>
                    BioDegen <Badge>2023</Badge>
                </Title>
                <P>
                    A research project that uses automata simulation to study human evolution and biodegenerative processes. A interdisciplinary
                    research project done with Professor Marriott at the University of Washington Tacoma. With data collection and visualization
                    we are able to study the effects of genetics on the human body over long periods of time on these AI agents.
                </P>
                <List ml = {4} my = {4}>    
                    <ListItem>
                        <Meta>Simulation</Meta> 
                        <Link href = "https://algorithm0r.github.io/BioDegen/">
                            BioDegen<ExternalLinkIcon mx = "2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta> 
                        <span>JavaScript, HTML, CSS </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta> 
                        <Link href = "https://www.github.com/Younghyuuk/BioDegen" 
                        isExternal>Code<ExternalLinkIcon mx = "2px"/></Link>
                    </ListItem>
                </List>
                <WorkImage src = "/images/bioDegenFull.png" alt = "BioDegen" />
                <WorkImage src = "/images/bioBox.png" alt = "BioDegen" />
                <WorkImage src = "/images/bioGraph.png" alt = "BioDegen" />
            </Container>
        </Layout>
    )
}

export default Work