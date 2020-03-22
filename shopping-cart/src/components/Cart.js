import React from 'react';
import { Container, Row, Table, ButtonGroup, Button } from 'reactstrap';

export default function Cart({ cart, onDeleteCart }) {
  const deleteCart = (cartId) => {
    onDeleteCart(cartId);
  };

  return (
    <Container>
      <Row>
        <h3>Cart ({cart.length})</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Sub Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.length !== 0 ? (
              <>
                {cart.map((val, key) => (
                  <tr key={key}>
                    <th scope='row'>{key + 1}</th>
                    <td>{val.product.productName}</td>
                    <td>{val.qty}</td>
                    <td>{val.product.price}</td>
                    <td>{val.subTotal}</td>
                    <td>
                      <ButtonGroup>
                        <Button onClick={() => deleteCart(val.cartId)} color='danger'>
                          x
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td colSpan='6'>Data Cart Kosong!</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
