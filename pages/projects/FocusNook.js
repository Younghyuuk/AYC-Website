import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphStyle'
import Layout from '../../components/layouts/pageTransition'

const Work = () => {
    return (
        <Layout title = "FocusNook">
            <Container>
                <Title>
                    FocusNook <Badge>2024</Badge>
                </Title>
                <P>
                    FocusNook is a task management tool that was created by a team of 4 with the goal of enhancing user productivity and focus.
                    This was done through proper task management listing, pomodoro timer, background audio, calendar integration, different themes,
                    and a collaboration feature among users to share tasks. The project was created in 4 weeks and was a great learning experience
                    for the use of MongoDB integration and backend APIs with React.
                </P>
                <List ml = {4} my = {4}>    
                    <ListItem>
                        <Meta>Stack</Meta> 
                        <span>JavaScript, MongoDB, Express, React, Node.js, HTML, CSS </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta> 
                        <Link href = "https://github.com/Younghyuuk/FocusNook/tree/develop" 
                        isExternal>Code<ExternalLinkIcon mx = "2px"/></Link>
                    </ListItem>
                </List>
                <WorkImage src = "/images/thumbnails/thumbnailNook.png" alt = "FocusNook logo" />
                <WorkImage src = "/images/FocusSignUp.png" alt = "Focus Sign up" />
                <WorkImage src = "/images/mainNook.png" alt = "Main" />
                <WorkImage src = "/images/themesNook.png" alt = "Themes" />
                <WorkImage src = "/images/timer.png" alt = "timer" />
            </Container>
        </Layout>
    )
}

export default Work