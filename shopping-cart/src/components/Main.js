import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import Products from './Products';
import Cart from './Cart';

export default function Main() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: 'Komik Seri: Dragon Ball Super by Akita Toriyama',
      productDesc: 'Deskripsi Komik Seri: Dragon Ball Super by Akita Toriyama',
      productImage: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/21/4355111/4355111_29f2cc32-f96e-4a86-8e31-1f351bc008bd_1080_1080',
      price: 32000,
      stock: 20
    },
    {
      id: 2,
      productName: 'Komik Seri : One Piece ( Eiichiro Oda )',
      productDesc: 'Deskripsi Komik Seri : One Piece Eiichiro Oda Terbit terbaru vol. 91',
      productImage: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/10/12/4355111/4355111_a13e55ad-5bd3-4fec-a3fe-14664a35a42d_1080_1080',
      price: 13300000,
      stock: 20
    },
    {
      id: 3,
      productName: 'Komik Seri: My Hero Academia ( Kohei Horikoshi )',
      productDesc: 'Deskripsi Komik Seri: My Hero Academia ( Kohei Horikoshi ) 1-12',
      productImage: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/2/1/4355111/4355111_80f536d4-474b-4d3c-91b7-34f951fe2ebe_1080_1080',
      price: 1200000,
      stock: 20
    },
    {
      id: 4,
      productName: 'Jitu Volume 2 Regular Edition Komik Reon',
      productDesc: 'Rating Dewasa 21+ : Cerita dalam komik ini untuk pembaca dewasa karena berkonten khusus. Tidak dianjurkan untuk dibaca anak-anak di bawah umur.',
      productImage: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/30/1769032/1769032_f0369dc9-c09a-4543-b73e-9bb94eace930_600_600.jpg',
      price: 50000,
      stock: 20
    }
  ]);

  const [cart, setCart] = useState([]);

  const onAddCart = (productId) => {
    const product = products.find((val) => val.id === productId);
    product.stock = product.stock - 1;
    setProducts([...products]);

    // ini buat cart
    const findCart = cart.find((val) => val.product.id === productId);
    if (findCart) {
      const qty = findCart.qty + 1;
      findCart.qty = qty;
      findCart.subTotal = findCart.product.price * qty;
      setCart([...cart]);
    } else {
      const dataCart = {
        cartId: cart.length + 1,
        product: product,
        qty: 1,
        subTotal: product.price
      };
      setCart([...cart, dataCart]);
    }

    const onDeleteCart = (cartId) => {
      const findCart = cart.find((val) => val.cartId === cartId);
      const findProduct = products.find((val) => val.id === findCart.product.id);
      findProduct.stock = findProduct.stock + findCart.qty;
      const filteredCart = cart.filter((val) => val.cartId !== cartId);
      setProducts([...products]);
      setCart([...filteredCart]);
    };
  };
  return (
    <Container>
      <Row>
        <Products products={products} onAddCart={onAddCart} />
        <Cart cart={cart} />
      </Row>
    </Container>
  );
}
