import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import { StyledButton } from "../Button/Button.styled";
import ProductForm from "../ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct(event) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log(response);
      router.push("/");
    } else {
      console.error(response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledButton onClick={() => setIsEditMode(!isEditMode)}>
        Edit product
      </StyledButton>
      <StyledButton onClick={handleDeleteProduct}>Delete product</StyledButton>
      {isEditMode && (
        <ProductForm onSubmit={handleEditProduct} isEditMode={isEditMode} />
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
