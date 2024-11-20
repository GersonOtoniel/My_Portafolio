import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Layout from "./Article";

function Text(){
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={6}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    css={{ backdropFilter: 'blur(10px)' }}
                >

                </Box>
            </Container>
        </Layout>
    )
}

export default Text;