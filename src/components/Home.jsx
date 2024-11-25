import { Box, Container, useColorModeValue, Heading, List, ListItem, Divider, Wrap } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import Layout from "./Article";
import Section from "./Section";
import Paragraph from "./paragraph";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io5";
import { BadgeItem } from "../Layouts/LayoutWork";
import { FaGolang, FaJava, FaReact, FaHtml5 } from "react-icons/fa6";

const Home = () => {
    const progressColor = useColorModeValue('blue.800','blue.600')
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
                <Divider/>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Teconologías
                    </Heading>
                    <List ml={2} my={8} >
                    <Heading as={'h3'} fontSize={'17'}>Lenguajes de Programación</Heading>
                        <Wrap spacing="15px" justify="center">
                            <BadgeItem color={'purple'} display={'inline-flex'} 
                            p={1} alignItems={'center'} style={{gap:7}}>
                                <IoLogoPython size={24}/>
                                PYTHON
                                <CircularProgress value={70} color={progressColor}>
                                    <CircularProgressLabel>70%</CircularProgressLabel>
                                </CircularProgress>
                            </BadgeItem>
                            <BadgeItem color={'blue'} display={'inline-flex'} 
                            p={1} alignItems={'center'} style={{gap:7}}>
                                <FaGolang size={28}/>
                                GOLANG
                                <CircularProgress value={50} color={progressColor}>
                                    <CircularProgressLabel>50%</CircularProgressLabel>
                                </CircularProgress>
                            </BadgeItem>
                            <BadgeItem color={'yellow'} display={'inline-flex'} 
                            p={1} alignItems={'center'} style={{gap:7}}>
                                <IoLogoJavascript size={24}/>
                                JAVASCRIPT
                                <CircularProgress value={25} color={progressColor}>
                                    <CircularProgressLabel>25%</CircularProgressLabel>
                                </CircularProgress>
                            </BadgeItem>
                        </Wrap>


                        <Wrap display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <BadgeItem color={'orange'} display={'inline-flex'} 
                            p={1} alignItems={'center'} style={{gap:7}}>
                                <FaJava size={24}/>
                                JAVA
                                <CircularProgress value={55} color={progressColor}>
                                    <CircularProgressLabel>55%</CircularProgressLabel>
                                </CircularProgress>
                            </BadgeItem>
                        </Wrap>


                        <Heading as={'h3'} fontSize={'17'} mt={10}>Frontend</Heading>
                        <Wrap spacing="20px" justify="center">
                            <BadgeItem color={'blue'} display={'inline-flex'} 
                            p={1} alignItems={'center'} style={{gap:7}}>
                                <FaReact size={24}/>
                                REACT
                                <CircularProgress value={25} color={progressColor}>
                                    <CircularProgressLabel>25%</CircularProgressLabel>
                                </CircularProgress>
                            </BadgeItem>
                            <BadgeItem color={'teal'} display={'inline-flex'} 
                            p={1} alignItems={'center'} style={{gap:7}}>
                                <FaHtml5 size={24}/>
                                HTML
                                <CircularProgress value={55} color={progressColor}>
                                    <CircularProgressLabel>55%</CircularProgressLabel>
                                </CircularProgress>
                            </BadgeItem>
                        </Wrap>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home