import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

export default function Handle() {
  const router = useRouter();

  const { id } = router.query;

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(id ? `/api/products/${id}` : null);

  if (!id) {
    return <h1>Loading...</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>An error occured</h1>;
  }

  if (!product) {
    return;
  }

  const {
    id: productId = "product id",
    category = "category",
    description = "description",
    name = "name",
    price = "price",
    currency = "euro",
  } = product;

  return (
    <ProductItem key={productId}>
      <ProductName>{name}</ProductName>
      <ProductCategory>{category}</ProductCategory>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>
        {price} {currency}
      </ProductPrice>
    </ProductItem>
  );
}

const ProductItem = styled.li`
  list-style: none;
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
