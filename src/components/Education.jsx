import { Stepper, Step, StepIndicator, StepStatus, 
    Box, StepTitle, StepIcon, StepNumber, StepDescription,
    StepSeparator, useSteps, Heading } from "@chakra-ui/react"
import Section from "./Section"

const steps = [
    { title: 'Ingenieria en Ciencias y Sistemas', description: 'Universidad de San Carlos de Guatemala 2020 - actualidad' },
    { title: 'Bachillerato', description: 'Liceo Nuevo amanecer 2018' },
  ]

export const Education = () => {
    const { activeStep } = useSteps({
        index: 0,
        count: steps.length,
      })
    return(
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Educación
            </Heading>
            <Stepper index={activeStep} orientation="vertical" gap={0} height={'200px'}>
                    {steps.map((step, index) => (
                <Step key={index}>
                <StepIndicator>
                    <StepStatus
                    />
                </StepIndicator>

                <Box flexShrink='0'>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
                </Step>
            ))}
            </Stepper>
        </Section>
    )
}
