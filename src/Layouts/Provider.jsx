import { ChakraProvider} from "@chakra-ui/react";
import theme from "../components/theme";

export default function Provider({children}) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}