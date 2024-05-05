import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import { ItemDetail } from './ItemDetail';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

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

  if (!product)
    return (
      <Container id="spinner">
        <Spinner animation="border" variant="success" />
      </Container>
    );

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};
