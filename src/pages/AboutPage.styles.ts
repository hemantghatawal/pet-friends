import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 680px;
  margin: 48px auto;
  padding: 0 16px 60px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

export const Sub = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.75;
  margin: 0;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #374151;

  span.icon { font-size: 18px; line-height: 1.4; }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechTag = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  background: #f0fdf4;
  border: 1.5px solid var(--color-primary);
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 500;
`;

export const Links = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const LinkBtn = styled.a`
  padding: 8px 20px;
  border-radius: 8px;
  background: var(--color-primary);
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.15s;

  &:hover { opacity: 0.85; }
`;
