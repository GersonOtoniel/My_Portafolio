import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../Layouts/Article";
import Section from "./Section";
import { GridProjects } from "../Works/Grid-item";
import Compi1Image from "../images/Compiladores1.jpg"
import Grafo1 from "../images/Grafos/Grafo1.jpg"
import lfp_p2 from "../images/LFP_P2/interfaz.jpg"
import { IoCodeSlash } from "react-icons/io5";

const Work = () => {
   return (
    <Layout title={'Proyectos'} >
        <Container maxW={'container.sm'}>
            <Heading mb={20} fontSize={28} display={'inline-flex'} style={{gap:17}}>
                <IoCodeSlash size={40}/>
                Proyectos Realizados
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <GridProjects title={'JavaCraft'} source={Compi1Image} to={'/ProyectoCompiladores1'} >
                    Consiste en crear un lenguaje de
                    programación para poder utilizar en los proyectos de los cursos de
                    Introducción a la Programación y Computación 1 y 2.
                    </GridProjects>
                </Section>
                <Section>
                    <GridProjects title={'Grafos'} source={Grafo1} to={'/ProyectoGrafos'}>
                        Consiste en una interfaz con la que se pueda crear Grafos
                        dirigidos y asi poder calcular un camino dado un nodo inicial
                        y uno final, sumado a ello se calcula tambien el camino mas 
                        corto entre ambos vertices.
                    </GridProjects>
                </Section>
                <Section>
                    <GridProjects title={'Traductor'} source={lfp_p2} to={'/ProyectoLFP'}>
                        Consiste en un compilador que traduce un lenguaje especificado y lo transforma en Sentencias de Bases de Datos No Relacionales.  
                    </GridProjects>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
   )
}

export default Work;