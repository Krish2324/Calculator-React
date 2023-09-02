import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import { FaBackspace } from "react-icons/fa";

function Calculator() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleInput =(e) => {
        const value = e.target.value;
        setInput((input) => input + value);
        console.log(input)
    }


    const handleArithmeticOperator=(e)=>{
        const value = e.target.value;

            if(value === "="){
                if(input){
                    setOutput(eval(input));
                    setInput("");
                }
                
            }else if (value === "AC"){
                setInput("");
                setOutput("");
            }

            else if (value === "PM"){
                if (input) {
                    let Check = eval(input);
                    setInput(Check !== 0 ? (Check > 0? `-${Check}` : `${Math.abs(Check)}` ) :"");
                }
            }

            else if(["+","-","/","*","."].includes(value)){
                if(input){
                    const LastChar = input.slice(-1);
                    if(["+","-","/","*","."].includes(LastChar)){
                        setInput(input.slice(0,-1) + value)
                    }else{
                        setInput(input + value)
                    }
                }
            }
    }

    const handleBackspace=()=>{
        if (input.length > 0) {
        setInput((input)=>input.slice(0,-1))            
        }
    }


    return ( 
    <div className = 'Calculator' >
        <div className = 'Calculator-Wrapper' >
            <div className = 'Calculator-Heading Aligned'>
                <h3 className = "Disable">Calculator In React</h3>
            </div>

            <div className='Calculator-Screen Aligned'>
                <div className='Calculator-Output'>
                    <span>
                    {output}
                    </span>
                </div>
            </div>

                <div className = 'Calculator-Input Aligned'>
                    <span>
                        {input ? input: "0"}
                    

                    </span>
                </div>

                <div className='Calculator-Button'>
                {/* First line */}
                    <Button type='button' className='Top-Btn' value="AC" onClick={handleArithmeticOperator}>
                        AC
                    </Button>
                    <Button type='button' className='Top-Btn' value="PM" onClick={handleArithmeticOperator}>
                        +/-
                    </Button>
                    <Button type='button' className='Top-Btn' value="%" onClick={handleInput}>
                        %
                    </Button>
                    <Button type='button' className='Special-Btn' value="" onClick={handleBackspace}>
                        <FaBackspace/>
                    </Button>
             {/* Second line */}
                    <Button type='button' className='Normal-Btn' value="7" onClick={handleInput}>
                        7
                    </Button>
                    <Button type='button' className='Normal-Btn' value="8" onClick={handleInput}>
                        8
                    </Button>
                    <Button type='button' className='Normal-Btn' value="9" onClick={handleInput}>
                        9
                    </Button>
                    <Button type='button' className='Special-Btn' value="*" onClick={handleArithmeticOperator}>
                        X
                    </Button>
                {/* Third Line */}
                    <Button type='button' className='Normal-Btn' value="4" onClick={handleInput}>
                        4
                    </Button>
                    <Button type='button' className='Normal-Btn' value="5" onClick={handleInput}>
                        5
                    </Button>
                    <Button type='button' className='Normal-Btn' value="6" onClick={handleInput}>
                        6
                    </Button>
                    <Button type='button' className='Special-Btn' value="/" onClick={handleArithmeticOperator}>
                        ÷
                    </Button>
                {/* Fourth Line */}
                    <Button type='button' className='Normal-Btn' value="1" onClick={handleInput}>
                        1
                    </Button>
                    <Button type='button' className='Normal-Btn' value="2" onClick={handleInput}>
                        2
                    </Button>
                    <Button type='button' className='Normal-Btn' value="3" onClick={handleInput}>
                        3
                    </Button>
                    <Button type='button' className='Special-Btn' value="-" onClick={handleArithmeticOperator}>
                        _ 
                    </Button>
                {/* Fifth line */}
                    <Button type='button' className='Special-Btn' value="." onClick={handleArithmeticOperator}>
                        .
                    </Button>
                    <Button type='button' className='Normal-Btn' value="0" onClick={handleInput}>
                        0
                    </Button>
                    <Button type='button' className='Special-Btn' value="+" onClick={handleArithmeticOperator}>
                        +
                    </Button> 
                    <Button type='button' className='Special-Btn' value="=" onClick={handleArithmeticOperator}>
                        =
                    </Button>
                </div>
        </div>
    </div>
    )
}

export default Calculator;