import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "./Article";
import Section from "./Section";
import { GridProjects } from "../Works/Grid-item";
import Compi1Image from "../images/Compiladores1.jpg"

const Work = () => {
   return (
    <Layout title={'Proyectos'} >
        <Container maxW={'container.sm'}>
            <Heading mb={20} fontSize={28}>
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
            </SimpleGrid>
        </Container>
    </Layout>
   )
}

export default Work;