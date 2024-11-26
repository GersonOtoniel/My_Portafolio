import { Container, List, ListItem, Heading, Badge, Link, Button } from "@chakra-ui/react"
import Layout from "../components/Article"
import ImageGrafo2 from "../images/Grafos/Grafo2.jpg"
import ImageGrafo3 from "../images/Grafos/Grafo3.jpg"
import { Title, WorkImage } from "../Layouts/LayoutWork"
import Paragraph from "../components/paragraph"
import { BadgeItem } from "../Layouts/LayoutWork"
import { IoLogoGithub } from "react-icons/io5"

export const GrafosProyecto = () => {
    return(
        <Layout title={'ProyectoGrafos'}>
            <Container maxW={'container.sm'}>
                <Title>
                    Busqueda de Caminos Simples
                </Title>
                <Paragraph>
                    Para la clase de Matematica para Computación 2 se solicito
                    un proyecto basado en la teoría matematica de Grafos, para ello
                    el lenguaje de programación era de libre elección.
                    <br/>
                    Por su simplicidad y amplias
                    librerias se decidio para este proyecto usar Python. Sobre todo se necesitaba 
                    una interfaz gráfica, ya que no podia realizarse en terminal o consola. Se debía
                    ingresar, al menos, de 2 a 8 vértices e ingresar el vértice inicial y el vértice final de los caminos simples a buscar.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Heading as={"h3"} variant={'page-title'} fontSize={18}>Tecnologías</Heading>
                        <BadgeItem color={'blue'}>
                            Python
                        </BadgeItem>
                        <BadgeItem color={'green'}>
                            Tkinter
                        </BadgeItem>
                        <BadgeItem color={'green'}>
                            Pillow
                        </BadgeItem>
                    </ListItem>

                    <ListItem pt={8}>
                        <Badge colorScheme="purple" mr={3} fontSize={14} borderRadius={'lg'}>
                            Respositorio: 
                        </Badge>
                        <Link href="https://github.com/GersonOtoniel/-MC2-Proyecto_202000774.git" target="_blank">
                            <Button as={'a'} leftIcon={<IoLogoGithub/>} rel="noopener noreferrer" borderRadius={24}>Código</Button>     
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src={ImageGrafo2} alt="ProyectoGrafos"/>
                <WorkImage src={ImageGrafo3} alt="ProyectoGrafos"/>
            </Container>
        </Layout>
    )
}