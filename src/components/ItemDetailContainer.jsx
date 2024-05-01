import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import data from '../data/MOCK_DATA (1).json';
import { ItemDetail } from './ItemDetail';
import { Container } from 'react-bootstrap';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, 'items', id);
    getDoc(refDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (!product) return <Container>Loading</Container>;

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};
