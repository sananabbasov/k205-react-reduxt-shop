import { Step, StepButton, StepContent, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Register = () => {


    const [step, setStep] = useState(3)
    let count = 0;
    const getStep = () => {
        setStep((count+1))
        count = step +1;
        console.log(step);
    }

    useEffect(() =>{

    },[step])
    return (
        <>
           <div className="container">
                <button>Geri</button>
                <button onClick={() => getStep()}>Ireli</button>
            </div>
            <Stepper activeStep={step} alternativeLabel>
                <Step>
                    <StepButton color="inherit">
                        Email
                        <StepContent TransitionProps={{ unmountOnExit: false }}>
                            dasdasd
                        </StepContent>
                    </StepButton>

                </Step>
                <Step>
                    <StepButton color="inherit">
                        Fullname
                        <StepContent TransitionProps={{ unmountOnExit: false }}>
                            aaaaaa
                        </StepContent>
                    </StepButton>
                </Step>
                <Step>
                    <StepButton color="inherit">
                        Password
                        <StepContent TransitionProps={{ unmountOnExit: false }}>
                            wwwwww
                        </StepContent>
                    </StepButton>
                </Step>
            </Stepper>
         



        </>
    )
}

export default Register