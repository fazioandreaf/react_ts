import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message.tsx';

const initialState : object = {
  name: 'Manny',
  message: 'Typescript is cool'
}

// define new type
type State = Readonly<typeof initialState>

function App(initialState: { name: string; message: string; }) :State {

  //  array qith multiply types in the exactly positione
  let aTuple : [string, number] = ['Manny', 2];
  // enum similitary a object with initial value
  enum Codes {first = 1, second = 2};
  
  // void is for return anything
  const warning = () : void => {
    console.log("warn")
  }


  // let firstValue: string = 'Manny';
  // let firstValue: number = 1;
  // let firstValue: boolean = true;
  let firstValue: Array<string> = ['dsada',' dsa',' da'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of { typeof firstValue} type!
          <br />
          The value {aTuple} is of { typeof aTuple} type!
          <Message name={initialState.name} message={initialState.message} />
        </p>
      </header>
    </div>
  );
}

export default App;
