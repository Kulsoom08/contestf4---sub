import React,{useState}from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const InputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const InputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const Operation = (op) => {
    setOperation(op);
    setSuccessMessage('Success!');
    setErrorMessage('');
  };

  const Calculate = () => {
    if (input1.trim() === '' || input2.trim() === '') {
      setErrorMessage('Num Cannot Be Empty');
      setResult('');
    } else if (!isNumeric(input1) || !isNumeric(input2)) {
      setErrorMessage('Enter Valid Num');
      setResult('');
    } else {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);
      let calculatedResult;

      switch (operation) {
        case '+':
          calculatedResult = num1 + num2;
          break;
        case '-':
          calculatedResult = num1 - num2;
          break;
        case '*':
          calculatedResult = num1 * num2;
          break;
        case '/':
          calculatedResult = num1 / num2;
          break;
      }

      setResult(`Result- ${calculatedResult}`);
      setErrorMessage('');
    }
  };

  const isNumeric = (value) => {
    return /^-?\d*\.?\d+$/.test(value);
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input
        type="text"
        value={input1}
        onChange={InputChange1}
        placeholder="Num 1"
      />
      <input
        type="text"
        value={input2}
        onChange={InputChange2}
        placeholder="Num 2"
      />
      <div className="buttons">
        <button onClick={() => Operation('+')}>+</button>
        <button onClick={() => Operation('-')}>-</button>
        <button onClick={() => Operation('*')}>*</button>
        <button onClick={() => Operation('/')}>/</button>
      </div>
      <button onClick={Calculate}>=</button>
      <div className="result">
        {errorMessage && <div className="errorl">Error</div>}
        {errorMessage && <div className="error">{errorMessage}</div>}
        {result && <div className="successl">{successMessage}</div>}
        {result && <div className="success">{result}</div>}
      </div>
    </div>
  );
};

export default Calculator;