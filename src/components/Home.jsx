import { Box, Container, useColorModeValue, Heading } from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import Layout from "./Article";
import Section from "./Section";
import Paragraph from "./paragraph";

const Home = () => {
    return (
        <Layout title={'Principal'}>
            <Container maxW={'container.sm'}>
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
                <Heading as="h3" variant="section-title">
                    Estudiante
                </Heading>
                    <Paragraph>
                        Gerson, nacido y criado en la ciudad de Guatemala 
                        estudiante de la carrera de Ingeniera en Ciencias 
                        y Sistemas de la Universidad de San Carlos, entusiasta 
                        de la tecnología y apacionado por la música y las 
                        matemáticas, actualmente aplicando mis conocimientos 
                        adquiridos durante mi transcurso en la carrera
                        en proyectos personales y universitarios.
                    </Paragraph>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>

                </Section>
            </Container>
        </Layout>
    )
}

export default Home