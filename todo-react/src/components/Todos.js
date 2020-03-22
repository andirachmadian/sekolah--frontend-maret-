import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button, ListGroup, ListGroupItem, Input } from 'reactstrap';
export default function Todos() {
  const [todos, setTodos] = useState([
    { text: 'Makan', completed: false },
    { text: 'Minum', completed: false },
    { text: 'Mandi', completed: true }
  ]);
  const [text, setText] = useState('');
  const addTodo = () => {
    setTodos([...todos, { text: text, completed: false }]);
    setText('');
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos]; // menggabung array
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const doneTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };
  return (
    <Container>
      <Row>
        <Col md='6'>
          <ListGroup>
            {todos.map((value, index) => (
              <ListGroupItem key={index}>
                <Container>
                  <Row>
                    <Col md='8' style={{ textDecoration: value.completed ? 'line-through' : 'none' }}>
                      {value.text}
                    </Col>
                    <Col md='4'>
                      <ButtonGroup>
                        {!value.completed && (
                          <Button color='success' onClick={() => doneTodo(index)}>
                            Done
                          </Button>
                        )}
                        <Button color='danger' onClick={() => deleteTodo(index)}>
                          Delete
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </Container>
              </ListGroupItem>
            ))}
            <ListGroupItem>
              <Input type='text' name='text' id='text' placeholder='Masukan Todo ...' value={text} onChange={(e) => setText(e.target.value)} />
              <Button color='primary' onClick={addTodo}>
                Add
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
