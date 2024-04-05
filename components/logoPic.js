import { Box, Image } from '@chakra-ui/react'
// import Image from 'next/image'

const LogoPic = () => {

  return (
    <Box 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "20vh"
      }}
    >
      <Image borderColor = "whiteAlpha.200" 
          borderWidth = {2} 
          borderStyle = "solid" 
          width = "120"
          height = "120"
          display = "inline-block" 
          borderRadius = "full"
          src = "/images/frontLogo.png" 
          alt = "Logo Image" 
       />
    </Box>
  )
}

export default LogoPic