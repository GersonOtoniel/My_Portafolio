import { Box, Container } from "@chakra-ui/react"
import Navbar from "./Navbar"
import { Footer } from "./Footer"

const main = ({children, path}) => {
    return (
        <Box  as="main" pb={8}>
            <Navbar path={path}/>
            <Container maxW="container.sm" pt={28}>
                {children}
                <Footer/>
            </Container>
        </Box>
    )
}

export default main