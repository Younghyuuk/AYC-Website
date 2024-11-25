import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

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
      <MotionBox 
        animate={{ y: ["0%", "10%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Image 
          borderColor="whiteAlpha.200" 
          borderWidth={2} 
          borderStyle="solid" 
          width="120"
          height="120"
          display="inline-block" 
          borderRadius="full"
          src="/images/mainLogo.png" 
          alt="Logo Image" 
        />
      </MotionBox>
    </Box>
  )
}

export default LogoPic
