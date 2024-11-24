import { Badge, Container, Heading, Link, List, ListItem } from "@chakra-ui/react"
import Layout from "../components/Article"
import { Title } from "../Layouts/LayoutWork"
import Paragraph from "../components/paragraph"

const CompiladoresUno = () => {
    return (
        <Layout title={'Proyecto-Compiladores-1'}>
            <Container maxW={'container.sm'}>
                <Title>
                    JavaCraft
                </Title>
                <Paragraph>
                Para el curso de Organización de Lenguajes y Compiladores 1, se puso en
                marcha un nuevo proyecto que consiste en crear un lenguaje de
                programación para poder utilizar en los proyectos de los cursos de
                Introducción a la Programación y Computación 1 y 2. Este lenguaje está
                fundamentado en los principales conceptos de programación, con un enfoque
                particular en el uso de estructuras de datos.
                </Paragraph>
                <List ml={4} my={8}>
                    <ListItem>
                        <Heading as={"h3"} variant={'page-title'} fontSize={18}>Tecnologías</Heading>
                        <Badge colorScheme="yellow" mr={4} mt={4} fontSize={14}>
                            Java
                        </Badge>
                        <Badge colorScheme="green" mr={4} mt={4} fontSize={14}>
                            Jflex
                        </Badge>
                        <Badge colorScheme="green" mr={4} mt={4} fontSize={14}>
                            CUP
                        </Badge>
                    </ListItem>
                    <ListItem pt={8}>
                        <Badge colorScheme="purple" mr={3} fontSize={14} >
                            Respositorio: 
                        </Badge>
                        <Link href="https://github.com/GersonOtoniel/-OLC1_VJ24_202000774.git" target="_blank">
                            https://github.com/GersonOtoniel/-OLC1_VJ24_202000774.git
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default CompiladoresUno;