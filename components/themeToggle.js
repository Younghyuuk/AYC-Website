import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeToggle = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <IconButton aria-label = "Toggle theme"
        colorScheme = {useColorModeValue('blue', 'yellow')}
        icon = {useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick = {toggleColorMode}>
        </IconButton>
    )
}
export default ThemeToggle