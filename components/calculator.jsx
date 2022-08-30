
import React, {useState}  from 'react'
import './calculator.css'
 
function Calculator(){
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  
  function account(e){
     var input = e.target.value
        if(num===0){
           setNum(input)
       }else{
          setNum(num + input)
       } 
  }

  function clear(){
     setNum(0)
  }


  function operatorHandler(e){
     var operatorInput = e.target.value
     setOperator(operatorInput)
     setOldNum(num)
     setNum(0)
  }

  function calculate() {
      if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
      } else if (operator === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
      } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
      } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
      }
 }

     return(
        <div  className='wrapper'>
            <div className='containerButton'>
                    <h1>{num}</h1>
                    <button id='clear' onClick={clear} >AC</button>
                    <button id='share' onClick={operatorHandler} value="/">/</button>
                    <button onClick={account} value={7}>7</button>
                    <button onClick={account} value={8}>8</button>
                    <button onClick={account} value={9}>9</button>
                    <button id='multiply' onClick={operatorHandler} value='x'>x</button>
                    <button onClick={account} value={4}>4</button>
                    <button onClick={account} value={5}>5</button>
                    <button onClick={account} value={6}>6</button>
                    <button id='subtraction' onClick={operatorHandler} value='-'>-</button>
                    <button onClick={account} value={1}>1</button>
                    <button onClick={account} value={2}>2</button>
                    <button onClick={account} value={3}>3</button>
                    <button onClick={operatorHandler} value='+' id='addition'>+</button>
                    <button id='zero' onClick={account} value={0} >0</button>
                    <button onClick={account} value='.' >.</button>
                    <button id='equality' onClick={calculate} value='='>=</button>
             </div>
         </div>
     )
}

export default Calculator