import { Box, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'

const LogoPic = () => {
  const { colorMode } = useColorMode()

  return (
    <Box 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "25vh"
      }}
    >
      <Image 
        src={ "/images/mouse.png"}
        width="98" 
        height="100" 
      />
    </Box>
  )
}

export default LogoPic