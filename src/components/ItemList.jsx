import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Item } from './Item';

export const ItemList = ({ products }) => (
  <Row>
    {products.map((product) => {
      return (
        <Col md={3}>
          <Item key={product.id} product={product} />
        </Col>
      );
    })}
  </Row>
);
