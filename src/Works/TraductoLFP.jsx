import { Container, List, ListItem, Heading, Link, Badge, Button } from "@chakra-ui/react"
import { BadgeItem } from "../Layouts/LayoutWork"
import Layout from "../Layouts/Article"
import { Title } from "../Layouts/LayoutWork"
import Paragraph from "../components/paragraph"
import { IoLogoGithub } from "react-icons/io5"
import { WorkImage } from "../Layouts/LayoutWork"
import interfaz from "../images/LFP_P2/interfaz.jpg"
import tokens from "../images/LFP_P2/tokens.jpg"

export const TraductorP2 = () => {
    return(
        <Layout title={'Traductor'}>
            <Container maxW={'container.sm'}>
                <Title>
                Traductor a Sentencias a NoSQL
                </Title>
                <Paragraph>
                El proyecto consiste en la elaboración de una herramienta que permita el diseño y creación de sentencias de bases de datos no relacionales de una forma sencilla.  La aplicación tiene un área de edición de código y un área de visualización de la sentencia final generada, posteriormente se podrán aplicar a un entorno adecuado a 
                MongoDb.
                </Paragraph>
                <List ml={4} my={8}>
                <ListItem>
                    <Heading as={"h3"} variant={'page-title'} fontSize={18}>Tecnologías</Heading>
                    <BadgeItem color={'blue'}>
                        Python
                    </BadgeItem>
                    <BadgeItem color={'green'}>
                        Tkinter
                    </BadgeItem>
                    </ListItem>
                    <ListItem pt={8}>
                        <Badge colorScheme="purple" mr={3} fontSize={14} borderRadius={'lg'}>
                            Respositorio: 
                        </Badge>
                        <Link href="https://github.com/GersonOtoniel/LFP_Proyecto2_202000774.git" target="_blank">
                        <Button as={'a'} leftIcon={<IoLogoGithub/>} rel="noopener noreferrer" borderRadius={24}>Código</Button>
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src={interfaz} alt={'Proyecto2 LFP'}/>
                <WorkImage src={tokens} alt={'Proyecto2 LFP'}/>
            </Container>
        </Layout>
    )
}