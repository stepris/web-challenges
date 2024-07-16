import useSWR from "swr";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Products() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>Product list</h1>
      <ProductList>
        {products.map((product) => {
          const { id, category, description, name, price, currency } = product;

          return (
            <ProductItem key={id}>
              <ProductName>{name}</ProductName>
              <ProductCategory>{category}</ProductCategory>
              <ProductDescription>{description}</ProductDescription>
              <ProductPrice>
                {price} {currency}
              </ProductPrice>
            </ProductItem>
          );
        })}
      </ProductList>
    </>
  );
}
const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ProductItem = styled.li`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  min-width: fit-content;
  width: calc(33.333% - 20px);
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px;
  color: #333;
`;

const ProductCategory = styled.p`
  font-size: 1rem;
  margin: 0 0 10px;
  color: #666;
`;

const ProductDescription = styled.p`
  font-size: 0.875rem;
  margin: 0 0 10px;
  color: #999;
`;

const ProductPrice = styled.p`
  font-size: 1.25rem;
  margin: 0;
  color: #333;
  font-weight: bold;
`;
