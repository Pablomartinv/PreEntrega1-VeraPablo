import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import data from '../data/MOCK_DATA (1).json';
import { Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
        <Card style={{ width: '70rem' }}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
          <Row>
            <Col>
              <Card.Img variant="bottom" src={product.pictureURL} />
            </Col>
            <Col>
              <Card.Img variant="bottom" src={product.pictureDetail1} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Img variant="bottom" src={product.pictureDetail2} />
            </Col>
            <Col>
              <Card.Img variant="bottom" src={product.pictureDetail3} />
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};
