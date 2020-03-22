import React from 'react'
import { Jumbotron } from 'reactstrap'

export default function Header({name}) {
  return (
    <Jumbotron>
      <h1>{name} - Simple Shopping Cart</h1>
    </Jumbotron>
  )
}