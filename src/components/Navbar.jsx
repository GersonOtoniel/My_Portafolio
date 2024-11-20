import { Box, Container, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import ThemeToggleButton from './theme-toggle-button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({to, path, target, children, ...props}) => {
    const active = path === to
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return(
        <Link
            as = {NavLink}
            to={to}
            p = {2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            borderRadius={active ? '6px' : '0px'}
            target = {target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef(({to, path, target,...props}, ref) => {
    const active = path === to
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link ref = {ref} to={to} as={NavLink} target={target} fontWeight={active ? 'extrabold' : 'normal'} borderRadius="md"  {...props}/>
    )
})

//const MenuLink = motion(MenuLink1, {forwardMotionProps: true})

const Navbar = props => {
    const { path } = props
    return (
        <Box
            position={'fixed'}
            as="nav"
            w = "100%"
            bg={useColorModeValue('#fffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display='flex'
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem path={path} to="/">
                        Home
                    </LinkItem>
                    <LinkItem path={path} to="/about">
                        Works
                    </LinkItem>
                    <LinkItem path={path} to="/about">
                        About me
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        to="https://github.com/GersonOtoniel/My_Portafolio"
                        path={path}
                        display='inline-flex'
                        alignItems="center"
                        style={{ gap: 7 }}
                        pl={3}
                    >
                        <IoLogoGithub/>
                        Source
                    </LinkItem>
                    
                </Stack>
                <Box flex={1} align={'right'}>
                    <ThemeToggleButton/>

                    <Box ml={2} display={{base: "inline-block", md: 'none'}}>
                        <Menu closeOnSelect={true} >
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon/>}
                                variant='outline'
                                aria-label='Options'
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} to="/" path={path}>
                                    Home
                                </MenuItem>
                                <MenuItem as={MenuLink}  to="/about" path={path}>
                                    About me
                                </MenuItem>
                                <MenuItem as={MenuLink} to="https://github.com/GersonOtoniel/My_Portafolio" path={path} target="_blank">
                                    Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default Navbar