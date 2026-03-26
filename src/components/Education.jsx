import { Stepper, Step, StepIndicator, StepStatus, 
    Box, StepTitle, StepIcon, StepNumber, StepDescription,
    StepSeparator, useSteps, Heading, useBreakpointValue } from "@chakra-ui/react"
import Section from "./Section"
import { useColorModeValue } from "@chakra-ui/react"

const steps = [
    { title: 'Ingenieria en Ciencias y Sistemas', description: 'Universidad de San Carlos de Guatemala 2020 - actualidad' },
    { title: 'Bachillerato', description: 'Liceo Nuevo amanecer 2018' },
  ]

export const Education = () => {
    const separatorColor = useColorModeValue("gray.500", "gray.600")
    const indicatorBorderColor = useColorModeValue("gray.600", "gray.300")
    const { activeStep } = useSteps({
        index: 0,
        count: steps.length,
      })
      
    return(
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Educación
            </Heading>
            <Stepper index={activeStep} orientation="vertical" gap={0} height={'200px'} borderColor={indicatorBorderColor}>
                    {steps.map((step, index) => (
                <Step key={index}>
                <StepIndicator borderColor={indicatorBorderColor}>
                    <StepStatus/>
                </StepIndicator>

                <Box maxW={"100%"}>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator borderColor="black"/>
                </Step>
            ))}
            </Stepper>
        </Section>
    )
}
