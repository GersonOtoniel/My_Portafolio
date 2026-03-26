import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Layout from "../Layouts/Article";
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
                    Quien soy?
                </Box>

                <Section delay={0.1}>
                    <Paragraph>
                        Estudiante, apasionado por la tecnología y el desarrollo de software, con un enfoque en el aprendizaje continuo y la 
                        aplicación práctica de mis conocimientos en proyectos personales y académicos. Mi objetivo es contribuir al mundo de la 
                        tecnología a través de soluciones innovadoras y eficientes, mientras sigo creciendo como profesional en el campo de la ingeniería 
                        en ciencias y sistemas.
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default About;