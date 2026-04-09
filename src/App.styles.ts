import styled from "styled-components";

export const PageWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const PetGrid = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Message = styled.p<{ $error?: boolean }>`
  color: ${({ $error }) => ($error ? "#dc2626" : "inherit")};
  grid-column: 1 / -1;
`;
