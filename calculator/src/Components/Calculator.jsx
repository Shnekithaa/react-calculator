import React, { useReducer} from 'react';
import Display from './Display';

const Calculator = () => {
    const ADD_INPUT = "ADD_INPUT";
    const CALCULATE = "CALCULATE";
    const CLEAR = "CLEAR";

    const initState = {
        inputs: "",
        result: "",
    }
    const reducer = (state = initState, action) => {
        switch(action.type){
            case ADD_INPUT: {
                return {...state, inputs: state.inputs + action.payload}
            }
            case CALCULATE: {
                const newInput = {...state, result: eval(state.inputs), inputs: state.result}
                return{...state, result: eval(state.inputs), inputs: newInput.result}
            }
            case CLEAR: {
                return{...state, inputs: "", result: ""}
            }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state)
    const handleInputs = (value) => {
        dispatch({type: ADD_INPUT, payload: value,})
    }
    const handleCalculate = () => {
        dispatch({type: CALCULATE})
    }
    const handleClear = () => {
        dispatch({type: CLEAR})
    }
  return (
    <div>
      <Display inputs={state.inputs} result={state.result}/>
      <button onClick={() => handleInputs("1")}>1</button>
      <button onClick={() => handleInputs("2")}>2</button>
      <button onClick={() => handleInputs("3")}>3</button>
      <button onClick={() => handleInputs("+")}>+</button>
      <br />
      <button onClick={() => handleInputs("4")}>4</button>
      <button onClick={() => handleInputs("5")}>5</button>
      <button onClick={() => handleInputs("6")}>6</button>
      <button onClick={() => handleInputs("-")}>-</button>
      <br />
      <button onClick={() => handleInputs("7")}>7</button>
      <button onClick={() => handleInputs("8")}>8</button>
      <button onClick={() => handleInputs("9")}>9</button>
      <button onClick={() => handleInputs("*")}>*</button>
      <br />
      <button onClick={() => handleInputs("0")}>0</button>
      <button onClick={() => handleInputs("/")}>/</button>
      <button onClick={() => handleCalculate("=")}>=</button>
      <button onClick={() => handleClear("C")}>C</button>
    </div>
  );
}

export default Calculator;
