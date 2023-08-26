import React from 'react'
import { Button } from "react-bootstrap";

function Calculator() {
    return ( 
    <div className = 'Calculator' >
        <div className = 'Calculator-Wrapper' >
            <div className = 'Calculator-Heading'>
                <h3 className = "disable">Calculator In React</h3>
            </div>

            <div className='Calculator-Screen'>
                <div className='Calculator-Output'>
                    <span>

                    </span>
                </div>

                <div className = 'Calculator-Backspace'>
                    <button className='Backspace-Btn'>
                        <i className=''></i>
                    </button>
                    <span>

                    </span>
                </div>

                <div className='Calculator-Button'>
                    <Button type='button' className='Top-Btn' value="AC">
                        AC
                    </Button>
                    <Button type='button' className='Top-Btn' value="PM">
                        &plusmn;
                    </Button>
                    <Button type='button' className='Top-Btn' value="%">
                        %
                    </Button>
                    <Button type='button' className='Top-Btn' value="">
                        <i className='fa-solid fa-rotate-left'></i>
                    </Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Calculator;