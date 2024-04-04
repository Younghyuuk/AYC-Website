import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    height: 35px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(30deg);
    }
`
const Logo = () => {
    const printImg = "/images/mouse.png"
    return (
        <Link href = "/">
            <LogoBox>
                <Image src = {printImg} width = {20} height = {20} alt = "logo" />
                <Text color = {useColorModeValue('gray.800', 'whiteAlpha.900')} 
                fontFamily = 'M PLUS Rounded 1c'
                fontWeight = "bold"
                ml = {3} > 
                Andrew Chon
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo;
