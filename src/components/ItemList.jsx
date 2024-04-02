import { Item } from './Item';

export const ItemList = ({ products }) => (
  <div className="d-flex">
    {products.map((product) => {
      return <Item key={product.id} product={product} />;
    })}
  </div>
);
