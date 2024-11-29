import { Badge, Button, Container, Heading, Link, List, ListItem } from "@chakra-ui/react"
import Layout from "../Layouts/Article"
import { BadgeItem, Title } from "../Layouts/LayoutWork"
import Paragraph from "../components/paragraph"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { IoLogoGithub } from "react-icons/io5"

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
                        <BadgeItem color={'yellow'}>
                            Java
                        </BadgeItem>
                        <BadgeItem color={'green'}>
                            Jflex
                        </BadgeItem>
                        <BadgeItem color={'green'}>
                            CUP
                        </BadgeItem>
                    </ListItem>
                    <ListItem pt={8}>
                        <Badge colorScheme="purple" mr={3} fontSize={14} borderRadius={'lg'}>
                            Respositorio: 
                        </Badge>
                        <Link href="https://github.com/GersonOtoniel/-OLC1_VJ24_202000774.git" target="_blank">
                        <Button as={'a'} leftIcon={<IoLogoGithub/>} rel="noopener noreferrer" borderRadius={24}>Código</Button>
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default CompiladoresUno;