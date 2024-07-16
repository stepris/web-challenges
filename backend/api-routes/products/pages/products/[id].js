import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Handle() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  const router = useRouter();

  const { id } = router.query;

  const productToDisplay = products.map((product) => product.id === id);

  console.log(productToDisplay);
  const {
    id: productId,
    category,
    description,
    name,
    price,
    currency,
  } = productToDisplay;

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
