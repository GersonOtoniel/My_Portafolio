import { Badge, Box, Heading, Image, Link, Tooltip } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { useColorMode } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"


export const Title = ({children}) => {
    return(
        <Box>
        <Link as={NavLink} to='/work' fontSize={18}>
            Proyectos
        </Link>
        <span>
            {' '}
            <ChevronRightIcon/>{' '}
        </span>
        <Heading as="h3" display={'inline-block'} mb={4} fontSize={20}>
            {children}
        </Heading>
    </Box>
    )
}

export const Images = ({src, alt}) => {
    const {colorMode} = useColorMode();
    return(
        <Image src={src} 
        borderRadius={'lg'} 
        w="full" 
        alt={alt}
        mb={4} 
        boxShadow={ colorMode == 'dark' ? "1px 2px 8px rgba(255, 255, 255, 0.5)" : "0 4px 8px rgba(0, 0, 0, 0.5)"}
        />
    )
}

export const BadgeItem = ({children, color, ...props}) => {
    return(
        <Badge colorScheme={color} mr={4} mt={4} fontSize={14} borderRadius={'lg'} {...props}>
            {children}
        </Badge>
    )
}

export const BadgeToolTip = ({children, color,tooltipLabel, ...props}) => {
    return(
        <Tooltip label={tooltipLabel} aria-label="Tooltip" hasArrow>
            <Badge colorScheme={color} mr={4} mt={4} fontSize={14} borderRadius={'lg'} {...props}>
                {children}
            </Badge>
        </Tooltip>
    )
}