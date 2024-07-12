import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { BoxWithStyledComponents } from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <FlexWrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </FlexWrapper>
  );
}

const FlexWrapper = styled.div`
  display: flex;
`;
