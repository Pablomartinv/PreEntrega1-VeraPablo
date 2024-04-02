import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import data from '../data/MOCK_DATA (1).json';
import { ItemList } from './ItemList';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      if (id) {
        const filteredProducts = data.filter((d) => d.category === id);
        setProducts(filteredProducts);
      } else {
        setProducts(data);
      }
    });
  }, [id]);

  return (
    <>
      <Container>
        <h2>{greeting}</h2>
        <ItemList products={products} />
      </Container>
    </>
  );
};
