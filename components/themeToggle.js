import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeToggle = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition = {{ duration: 0.3 }}
            >
                <IconButton aria-label="Toggle theme"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}>
                </IconButton>
            </motion.div>
        </AnimatePresence>
        // <IconButton aria-label="Toggle theme"
        //     colorScheme={useColorModeValue('blue', 'yellow')}
        //     icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        //     onClick={toggleColorMode}>
        // </IconButton>
    )
}
export default ThemeToggle