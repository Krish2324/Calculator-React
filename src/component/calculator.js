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

            else if(["+","-","/","*","%"].includes(value)){
                if(input){
                    const LastChar = input.slice(-1);
                    if(["+","-","/","*","%"].includes(LastChar)){
                        setInput(input.slice(0,-1) + value)
                    }else{
                        setInput(input + value)
                    }
                }
            }

            if (value === "=") {
            if (input) {
              // Regular expression to match percentages (e.g., "50%2")
              const percentageRegex = /^(\d+(\.\d+)?)%(\d+(\.\d+)?)$/;
        
              if (percentageRegex.test(input)) {
                
                try {
                  const match = input.match(percentageRegex);
                  const operand1 = parseFloat(match[1]);
                  const operand2 = parseFloat(match[3]);
                  const result = (operand1 / 100) * operand2;
                  setOutput(result);
                  setInput(input);
                }
             catch (error) {
                  setOutput("Error");
                  setInput("");
                }
              } else {
                try {
                  setOutput(eval(input));
                  setInput(eval(input).toString());
                } catch (error) {
                  setOutput("Error");
                  setInput("");
                }
              }
            }
          }

              
    }       

    const handleBackspace=()=>{
        if (input.length > 0) {
        setInput((input)=>input.slice(0,-1))            
        }
    }

    const handleDot = (e) => {
            const value = e.target.value;
            const lastChar = input.slice(-1);
          
            if (value === '.') {
              // If the last character is an operator, disallow adding a decimal point
              if (['+', '-', '*', '/','%','.'].includes(lastChar)) {
                return;
              }
          
              // If there's already a decimal point in the current number, disallow adding another
              const currentNumber = input.split(/[\+\-\*\/]/).pop();
              if (currentNumber.includes('.')) {
                return;
              }
            setInput((input) => input + value);

            }
        };

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
                        {output}

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
                    <Button type='button' className='Top-Btn' value="%" onClick={handleArithmeticOperator}>
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
                    <Button type='button' className='Special-Btn' value="." onClick={handleDot}>
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