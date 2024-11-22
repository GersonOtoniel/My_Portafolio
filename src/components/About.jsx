import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Layout from "./Article";
import Section from "./Section";
import Paragraph from "./paragraph";

const About = () => {
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

export default About;