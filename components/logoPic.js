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
        src={"/images/mouse.png"}
        width="98" 
        height="100" 
        style={{
          animation: 'spinHorizontal 4s linear infinite'
        }}
      />
      <style jsx global>{`
        @keyframes spinHorizontal {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(1turn); }
        }
      `}</style>
    </Box>
  )
}

export default LogoPic