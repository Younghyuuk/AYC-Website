import { loadGLTFModel } from '../lib/model'
// import { DogSpinner, DogContainer } from './voxel-dog-loader'
import { Box, Spinner } from '@chakra-ui/react'
import Image from 'next/image'



const LogoPic = () => {
    return (
        <Box 
          // ref={refContainer} 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: "25vh"
          }}
        >
          <Image 
            src="/images/mouse.png" 
            width="98" 
            height="100" 
            style={{
              animation: 'spinHorizontal 4s linear infinite',
              backdropFilter: 'none' // This line removes the blur effect
            }}
          />
          <style jsx global>{`
            @keyframes spinHorizontal {
              0% { transform: rotateY(0deg); }
              100% { transform: rotateY(1turn); }
            }
          `}</style>
        </Box>
      )
}
export default LogoPic