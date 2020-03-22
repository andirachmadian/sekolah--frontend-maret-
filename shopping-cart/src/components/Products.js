import React from 'react';
import { Container, Row, Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';

export default function Products({ products, onAddCart }) {
  const addToCart = (productId) => {
    onAddCart(productId);
  };
  return (
    <Container>
      <Row>
        <h3>Products</h3>
        <CardGroup>
          {products.map((val, key) => (
            <Card key={key}>
              <CardImg top width='100%' src={val.productImage} height='300' alt='Card image cap' />
              <CardBody>
                <CardTitle>
                  <h4>{val.productName}</h4>
                </CardTitle>
                <CardSubtitle>
                  {val.price} - ({val.stock})
                </CardSubtitle>
                <CardText>{val.productDesc}</CardText>
                <Button color='primary' onClick={() => addToCart(val.id)}>
                  Add to cart
                </Button>
              </CardBody>
            </Card>
          ))}
        </CardGroup>
      </Row>
    </Container>
  );
}
