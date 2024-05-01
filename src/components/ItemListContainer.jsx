import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import data from '../data/MOCK_DATA (1).json';
import { ItemList } from './ItemList';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;

    if (!id) {
      refCollection = collection(db, 'items');
    } else {
      refCollection = query(
        collection(db, 'items'),
        where('category', '==', id)
      );
    }

    getDocs(refCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(setLoading(false));
  }, [id]);

  if (loading)
    return (
      <Container>
        <h2>Loading</h2>
      </Container>
    );

  return (
    <>
      <Container>
        <div id="greeting">
          <h2>{greeting}</h2>
        </div>

        <ItemList products={products} />
      </Container>
    </>
  );
};
