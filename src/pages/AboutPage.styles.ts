import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 640px;
  margin: 60px auto;
  padding: 0 16px;
`;

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
`;

export const Sub = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 16px;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #374151;

  span.icon {
    font-size: 18px;
    line-height: 1;
  }
`;
