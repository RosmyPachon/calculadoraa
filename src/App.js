import React, { useState } from "react";
import './App.css'; 

const App = () => {
    const[result, setResult] = useState("")
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const calculate = () => {
        try{
            setResult(eval(result).toString());
        } catch(err){
            setResult("Error")
        }
    }
    return (
            <div className="container">
                <form>
                    <input type="text" value={result}/>
                </form>

                <div className="keypad">
                    <button className="highlight" onClick={clear} id="clear">Clear</button>
                    <button className="highlight" onClick={backspace} id="backspace"> C </button>
                    <button className="operadores" name="/" onClick={handleClick} > &divide; </button>
                    <button id="btn7" name="7" onClick={handleClick} ></button>
                    <button id="btn8" name="8" onClick={handleClick} ></button>
                    <button id="btn9" name="9" onClick={handleClick} ></button>
                    <button className="operadores" name="*" onClick={handleClick} > &times; </button>
                    <button id="btn4" name="4" onClick={handleClick} ></button>
                    <button id="btn5" name="5" onClick={handleClick} ></button>
                    <button id="btn6" name="6" onClick={handleClick} ></button>
                    <button className="operadores" name="-" onClick={handleClick} > &ndash; </button>
                    <button id="btn1" name="1" onClick={handleClick} ></button>
                    <button id="btn2" name="2" onClick={handleClick} ></button>
                    <button  id="btn3" name="3" onClick={handleClick} ></button>
                    <button className="operadores" name="+" onClick={handleClick} > + </button>
                    <button id="btn0" name="0" onClick={handleClick} ></button>
                    <button className="highlight" name="." onClick={handleClick} > . </button>
                    <button className="highlight" onClick={calculate} id="result" > = </button>

                </div>
            </div>
    );
}
export default App;