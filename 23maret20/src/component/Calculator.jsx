import React, { useState } from 'react';
import { InputGroup, FormControl, Container, Button, ButtonGroup } from 'react-bootstrap';
export default function Calculator() {
  const [inputButton, setButton] = useState([]);
  // const setButton = (event) => {

  // };
  const [inputText, setText] = useState('');
  // const setText = () => {

  // }
  return (
    <Container fluid='md'>
      <input placeholder='hasil' type='text' disabled></input>
      <br />
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </ButtonGroup>
      <br />
      <buttonGroup>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </buttonGroup>
      <br />
      <buttonGroup>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>x</Button>
      </buttonGroup>
      <br />
      <buttonGroup>
        <Button>0</Button>
        <Button>/</Button>
        <Button>C</Button>
        <Button>=</Button>
      </buttonGroup>
    </Container>
  );
  console.log(Button);
}
