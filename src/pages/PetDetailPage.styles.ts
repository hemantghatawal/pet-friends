import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  /* max-width: 720px; */
  margin: 40px auto;
  padding: 0 16px;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;

  &:hover { text-decoration: underline; }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  /* box-shadow: 0 4px 24px rgba(0,0,0,0.1); */
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
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
  position: relative;
  display: flex;
  justify-content: center;   
  padding: 20px 24px 16px;
  border-bottom: 1px solid #f3f4f6;
`;

export const HeadBackLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 24px 16px;
  border-bottom: 1px solid #f3f4f6;
`;


export const HeadContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  max-width: 800px; 
  width: 100%;
  justify-content: space-between;
  text-align: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 20px;
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
