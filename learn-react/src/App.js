import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

function App() {
  const imageStar = 'https://cdn.pixabay.com/photo/2017/02/01/00/29/lone-star-2028578_960_720.png'
  const user = [
    {name : 'Andi', age: 28},
    {name : 'Yusuf', age: 28},
    {name : 'Randy', age: 28},
    {name : 'Haris', age: 28},
    {name : 'Heru', age: 28}
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={imageStar} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          user.map((value, index) => {
            
            return(<Greeting key={index} name={value.name} age={value.age}/>)
            
          })
        }
        {/* <Greeting nama ='Andi' umur = {28}/>
        <Greeting nama ='Yusuf' umur = {23}/>
        <Greeting nama ='Randy' umur = {22}/>
        <Greeting nama ='Heru' umur = {29}/>
        <Greeting nama ='Haris' umur = {25}/> */}
      </header>
      <div>
        <p style={{fontFamily: 'Arial black', fontSize: 50, color: 'black'}}>Andi Rachmadian</p>
      </div>
    </div>
  );
}

export default App;
