import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue, Box } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode='wait' initial={false}>
      <Box display="inline-block" position="relative">
        <motion.div
          style={{ display: 'inline-block' }}
          key={useColorModeValue('light', 'dark')}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          exit={{ y: 20, opacity: 0}}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
            transition="background-color 0.3s ease"
            onClick={toggleColorMode}
          ></IconButton>
        </motion.div>
      </Box>
    </AnimatePresence>
  )
}

export default ThemeToggleButton