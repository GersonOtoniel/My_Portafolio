import { Box, LinkBox, Text } from "@chakra-ui/react"
import { Images } from "../Layouts/LayoutWork"
import { NavLink } from "react-router-dom"


export const GridProjects = ({children, source, title, to}) => {
    return(
        <Box>
            <LinkBox cursor={'pointer'} as={NavLink} to={to}>
                <Images src={source} alt={title}/>
                <Text fontSize={20} align={'center'} mt={2}>{title}</Text>
                <Text fontSize={12} align={'center'}>{children}</Text>
            </LinkBox>
        </Box>
    )
}