import NextLink from 'next/link'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Image
} from '@chakra-ui/react'

export const ResearchCard = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        borderRadius="lg"
        loading="lazy"
      />
      <LinkOverlay as={NextLink} href={`/research/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
