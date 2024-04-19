import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Item } from './Item';

export const ItemList = ({ products }) => (
  <Row>
    {products.map((product) => {
      return (
        <Col key={product.id} md={3}>
          <Item product={product} />
        </Col>
      );
    })}
  </Row>
);
