import Link from 'next/link'
import Image from 'next/image'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    height: 35px;
    line-height: 20px;
    padding: 10px;

    img {
        transition: transform 0.5s ease-in-out;
    }

    &:hover img {
        transform: rotate(30deg);
    }
`
const Logo = () => {
    const printImg = "/images/newMouse.png"
    return (
        <Link href = "/">
            <LogoBox>
                <Box 
                    display="inline-block"
                    width="24px"
                    height="24px"
                    borderRadius="full"
                    borderWidth="0.5px"
                    borderStyle="solid"
                    borderColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    overflow="hidden"
                >
                    <Image src = {printImg} width = {30} height = {30} alt = "logo" />
                </Box>

                <Text color = {useColorModeValue('gray.800', 'whiteAlpha.900')} 
                fontFamily = 'M PLUS Rounded 1c'
                fontWeight = "bold"
                fontSize={18}
                ml = {3} > 
                Andrew Chon
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo;
