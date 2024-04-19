import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import data from '../data/MOCK_DATA (1).json';
import { ItemDetail } from './ItemDetail';
import { Container } from 'react-bootstrap';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      const findedProduct = data.find((p) => p.id === Number(id));
      setProduct(findedProduct);
    });
  }, [id]);

  if (!product) return <Container>Loading</Container>;

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};
