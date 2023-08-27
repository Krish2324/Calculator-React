import React from 'react'
import { Button } from "react-bootstrap";
import { FaBackspace } from "react-icons/fa";
import { FaDivide } from "react-icons/fa";

function Calculator() {
    return ( 
    <div className = 'Calculator' >
        <div className = 'Calculator-Wrapper' >
            <div className = 'Calculator-Heading Aligned'>
                <h3 className = "Disable">Calculator In React</h3>
            </div>

            <div className='Calculator-Screen Aligned'>
                <div className='Calculator-Output'>
                    <span>

                    </span>
                </div>
            </div>

                <div className = 'Calculator-Input Aligned'>
                    <span>

                    </span>
                </div>

                <div className='Calculator-Button'>
                {/* First line */}
                    <Button type='button' className='Top-Btn' value="AC">
                        AC
                    </Button>
                    <Button type='button' className='Top-Btn' value="PM">
                        +/-
                    </Button>
                    <Button type='button' className='Top-Btn' value="%">
                        %
                    </Button>
                    <Button type='button' className='Special-Btn' value="">
                        <FaBackspace/>
                    </Button>
             {/* Second line */}
                    <Button type='button' className='Normal-Btn' value="7">
                        7
                    </Button>
                    <Button type='button' className='Normal-Btn' value="8">
                        8
                    </Button>
                    <Button type='button' className='Normal-Btn' value="9">
                        9
                    </Button>
                    <Button type='button' className='Special-Btn' value="x">
                        x
                    </Button>
                {/* Third Line */}
                    <Button type='button' className='Normal-Btn' value="4">
                        4
                    </Button>
                    <Button type='button' className='Normal-Btn' value="5">
                        5
                    </Button>
                    <Button type='button' className='Normal-Btn' value="6">
                        6
                    </Button>
                    <Button type='button' className='Special-Btn' value="">
                        <FaDivide/>
                    </Button>
                {/* Fourth Line */}
                    <Button type='button' className='Normal-Btn' value="1">
                        1
                    </Button>
                    <Button type='button' className='Normal-Btn' value="2">
                        2
                    </Button>
                    <Button type='button' className='Normal-Btn' value="3">
                        3
                    </Button>
                    <Button type='button' className='Special-Btn' value="-">
                        -
                    </Button>
                {/* Fifth line */}
                    <Button type='button' className='Normal-Btn' value=".">
                        .
                    </Button>
                    <Button type='button' className='Normal-Btn' value="0">
                        0
                    </Button>
                    <Button type='button' className='Special-Btn' value="+">
                        +
                    </Button>
                    <Button type='button' className='Special-Btn' value="=">
                        =
                    </Button>
                </div>
        </div>
    </div>
    )
}

export default Calculator;