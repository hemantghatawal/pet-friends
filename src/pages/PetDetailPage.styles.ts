import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 720px;
  margin: 40px auto;
  padding: 0 16px;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #166534;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 24px;

  &:hover { text-decoration: underline; }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
`;

export const HeroImage = styled.img`
  width: auto;
  max-height: 70vh;
  height: auto;
  object-fit: contain;
  display: block;
  background: #f9fafb;
  border-radius: 15px
`;

export const Head = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
  padding: 24px;
`;

export const Body = styled.div`

`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #111827;
`;

export const DateLabel = styled.time`
  font-size: 13px;
  color: #9ca3af;
  display: block;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #4b5563;
  line-height: 1.7;
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 80px 16px;
  color: #6b7280;
  font-size: 16px;
`;
