import { Container, Text } from "@chakra-ui/react"
import Layout from "../components/Article"
import { Title } from "../Layouts/LayoutWork"

const CompiladoresUno = () => {
    return (
        <Layout title={'Proyecto-Compiladores-1'}>
            <Container maxW={'container.sm'}>
                <Title>
                    JavaCraft
                </Title>
            </Container>
        </Layout>
    )
}

export default CompiladoresUno;