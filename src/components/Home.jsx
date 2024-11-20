import { Box, Container, useColorModeValue, Heading } from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import Layout from "./Article";
import Section from "./Section";
import Paragraph from "./paragraph";

const Home = () => {
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
                    <ReactTyped strings={["Hello, I&apos;m a Systems Engineer!"]} typeSpeed={60} backSpeed={50} loop/>
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Gerson González
                        </Heading>
                        <p>( Artist / Developer / Programmer)</p>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Paragraph>
                        Hola soy Gerson, estudiante de la carrera de Ingeniera en Ciencias y Sistemas
                        de la Universidad de San Carlos de Guatemala
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home