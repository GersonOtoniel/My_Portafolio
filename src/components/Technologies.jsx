import { IoLogoPython, IoLogoJavascript } from "react-icons/io5";
import { BadgeItem, BadgeToolTip } from "../Layouts/LayoutWork";
import { FaGolang, FaJava, FaReact, FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa6";
import { CircularProgress, CircularProgressLabel, useColorModeValue } from "@chakra-ui/react";
import { Heading, List, Wrap } from "@chakra-ui/react";
import Section from "./Section";

export const Tecnologies = () => {
    const progressColor = useColorModeValue('black','blue.600')
    return(
        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
            Tecnologías
        </Heading>
        <List ml={2} my={8} >
        <Heading as={'h3'} fontSize={'17'} mt={10}>Lenguajes de Programación</Heading>
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
                <BadgeToolTip color={'yellow'} display={'inline-flex'} 
                p={1} alignItems={'center'} style={{gap:7}} tooltipLabel={"Aprendizaje en curso"}>
                    <IoLogoJavascript size={24}/>
                    JAVASCRIPT
                    <CircularProgress value={25} color={progressColor}>
                        <CircularProgressLabel>25%</CircularProgressLabel>
                    </CircularProgress>
                </BadgeToolTip>
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

            <Heading as={'h3'} fontSize={'17'} mt={10}>Herramientas</Heading>
            <Wrap spacing="20px" justify="center">
            <BadgeItem color={'orange'} display={'inline-flex'} 
                p={1} alignItems={'center'} style={{gap:7}}>
                    <FaGitAlt size={24}/>
                    GIT
                    <CircularProgress value={35} color={progressColor}>
                        <CircularProgressLabel>35%</CircularProgressLabel>
                    </CircularProgress>
                </BadgeItem>
                <BadgeItem color={'blue'} display={'inline-flex'} 
                p={1} alignItems={'center'} style={{gap:7}}>
                    <FaGithub size={24}/>
                    GITHUB
                    <CircularProgress value={45} color={progressColor}>
                        <CircularProgressLabel>45%</CircularProgressLabel>
                    </CircularProgress>
                </BadgeItem>
            </Wrap>
        </List>
    </Section>
    )
}