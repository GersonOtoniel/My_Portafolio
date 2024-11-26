import { Box } from "@chakra-ui/react";

export const Footer = () => {
    return(
        <Box align="center" fontSize={'sm'} opacity={0.4} mt={24}>
            &copy; {new Date().getFullYear()} Gerson González. All Rights Reserved.
        </Box>
    )
} 