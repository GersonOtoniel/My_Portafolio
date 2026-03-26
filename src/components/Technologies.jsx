import { IoLogoPython, IoLogoJavascript } from "react-icons/io5";
import { BadgeItem, BadgeToolTip } from "../Layouts/LayoutWork";
import { FaGolang, FaJava, FaReact, FaHtml5, FaGitAlt, FaGithub, FaCss } from "react-icons/fa6";
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiDotnet, SiSpringboot, SiFlask, 
    SiFastapi, SiTypescript, SiCplusplus, SiMysql, SiPostgresql, SiSqlite} from "react-icons/si";
import { useColorModeValue } from "@chakra-ui/react";
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
                p={3} alignItems={'center'} style={{gap:7}}>
                    <IoLogoPython size={24}/>
                    PYTHON
                </BadgeItem>
                <BadgeItem color={'blue'} display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <FaGolang size={28}/>
                    GOLANG
                </BadgeItem>
                <BadgeToolTip color={'yellow'} display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}} tooltipLabel={"Aprendizaje en curso"}>
                    <IoLogoJavascript size={24}/>
                    JAVASCRIPT
                </BadgeToolTip>
            </Wrap>

            <Wrap display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <BadgeItem color={'orange'} display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <FaJava size={24}/>
                    JAVA
                </BadgeItem>
                <BadgeItem display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <SiTypescript size={24}/>
                    TypeScript
                </BadgeItem>
                <BadgeItem display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <SiCplusplus size={24} color="#00599C"/>
                    C++
                </BadgeItem>
            </Wrap>

            <Heading as={'h3'} fontSize={'17'} mt={10}>Backend</Heading>
            <Wrap spacing="20px" justify="center">
                <BadgeItem display={'inline-flex'}
                p={2} alignItems={'center'} style={{gap:7}}>
                    <FaNodeJs size={30} color="#339933"/>
                    NodeJS
                </BadgeItem>
                <BadgeItem display={'inline-flex'}
                p={2} alignItems={'center'} style={{gap:7}}>
                    <SiExpress size={30} color="#000000"/>
                    Express
                </BadgeItem>
                <BadgeItem display={'inline-flex'}
                p={2} alignItems={'center'} style={{gap:7}}>
                    <SiDotnet size={30} color="#512BD4"/>
                    .net
                </BadgeItem>
                <BadgeItem display={'inline-flex'}
                p={2} alignItems={'center'} style={{gap:7}}>
                    <SiSpringboot size={30} color="#6DB33F"/>
                    springboot
                </BadgeItem>
                <BadgeItem display={'inline-flex'}
                p={2} alignItems={'center'} style={{gap:7}}>
                    <SiFlask size={30} color="#6DB33F"/>
                    Flask
                </BadgeItem>
                <BadgeItem display={'inline-flex'}
                p={2} alignItems={'center'} style={{gap:7}}>
                    <SiFastapi size={30} color="#009688"/>
                    fastapi
                </BadgeItem>
                <BadgeItem display={'inline-flex'}
                p={2} alignItems={'center'} style={{gap:7}}>
                    <FaGolang size={30} color="#61DAFB"/>
                    fiber
                </BadgeItem>                
            </Wrap>


            <Heading as={'h3'} fontSize={'17'} mt={10}>Frontend</Heading>
            <Wrap spacing="20px" justify="center">
                <BadgeItem color={'blue'} display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <FaReact size={24}/>
                    REACT
                </BadgeItem>
                <BadgeItem color={'teal'} display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <FaHtml5 size={24}/>
                    HTML
                </BadgeItem>
                <BadgeItem color={'teal'} display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <FaCss size={24}/>
                    csS
                </BadgeItem>
            </Wrap>

            <Heading as={'h3'} fontSize={'17'} mt={10}>Bases de Datos</Heading>
            <Wrap spacing="20px" justify="center">
                <BadgeItem display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <SiMysql size={24} color="#4479A1"/>
                    MySQL
                </BadgeItem>
                <BadgeItem display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <SiPostgresql size={24} color="#336791"/>
                    PostgreSQL
                </BadgeItem>
                <BadgeItem display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <SiSqlite size={24} color="#003366"/>
                    SQLite
                </BadgeItem>
            </Wrap>

            <Heading as={'h3'} fontSize={'17'} mt={10}>Herramientas</Heading>
            <Wrap spacing="20px" justify="center">
            <BadgeItem color={'orange'} display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <FaGitAlt size={24}/>
                    GIT
                </BadgeItem>
                <BadgeItem color={'blue'} display={'inline-flex'} 
                p={3} alignItems={'center'} style={{gap:7}}>
                    <FaGithub size={24}/>
                    GITHUB
                </BadgeItem>
            </Wrap>
        </List>
    </Section>
    )
}