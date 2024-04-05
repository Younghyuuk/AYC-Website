import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Link } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w = "100%" align = "center">
        <LinkBox cursor = "pointer">
            <Image src = {thumbnail} 
            alt = {title} 
            className = "grid-item-thumbnail"
            placeholder = 'blur'
            loading = 'lazy'
            />
            <LinkOverlay href = {href} target = "_blank">
                <Text mt = {2}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize = {14}> {children} </Text>
        </LinkBox>
    </Box>

)

export const WorkGrid = ({ children, id, title, thumbnail }) => (
    <Box w = "100%" align = "center">
        <NextLink href = {`/projects/${id}`}>
            <LinkBox cursor = "pointer">
                <Image src = {thumbnail} alt={title} 
                className = "grid-item-thumbnail" 
                placeholder = 'blur' 
                loading = 'lazy' />
                <LinkOverlay href = {`/projects/${id}`}>
                    <Text mt = {2} fontSize = {18}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize = {13}> 
                    {children} 
                </Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles = {`
        .grid-item-thumbnail {
            border-radius: 10px;
            transition: transform 0.2s;
        }
        .grid-item-thumbnail:hover {
            transform: scale(1.05);
        }

    `}
    />
)