import { Box, Container } from "@chakra-ui/react"
import Navbar from "./Navbar"

const main = ({children, path}) => {
    return (
        <Box  as="main" pb={8}>
            <Navbar path={path}/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default main