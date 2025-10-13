import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphStyle'
import Layout from '../../components/layouts/pageTransition'

const Work = () => {
  return (
    <Layout title="BinaryBod">
      <Container>
        <Title>
          BinaryBod <Badge>Mar 2024 – Jun 2024</Badge>
        </Title>
        <P>
          BinaryBod is a full-stack fitness tracker developed at the University of Washington Tacoma. 
          Built in a team of three using agile methodologies, the app allows users to track workouts, manage custom exercise routines, 
          and log nutrition and hydration throughout the week.
        </P>
        <P>
          Users can create and save workout splits, add custom exercises, monitor progress, and view summaries. 
          It features secure user authentication and a responsive design built with React and TypeScript.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            TypeScript, React, Express, MySQL, CSS
          </ListItem>
          <ListItem>
            <Meta>Role</Meta>
            Full-stack Developer (Team of 3)
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/Younghyuuk/BinaryBod" isExternal>
              GitHub Repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src = "/images/thumbnails/thumbnailBB.png" alt = "BinaryBod logo" />
        <WorkImage src = "/images/signUpBB.png" alt = "BB Sign up" />
        <WorkImage src = "/images/exercisesBB.png" alt = "Exercises" />
        <WorkImage src = "/images/nutritionBB.png" alt = "Nutrition" />
    
        {/* <WorkImage src="/images/binarybodFull.png" alt="BinaryBod App Overview" />
        <WorkImage src="/images/binarybodDashboard.png" alt="BinaryBod Dashboard" /> */}
      </Container>
    </Layout>
  )
}

export default Work
