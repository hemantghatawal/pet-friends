import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
  gap: 16px;
  text-align: center;
  padding: 24px;
`;

const Code = styled.h1`
  font-size: 80px;
  font-weight: 800;
  color: #e5e7eb;
  line-height: 1;
  margin: 0;
`;

const HomeLink = styled(Link)`
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--color-primary);
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  &:hover { opacity: 0.85; }
`;

export default function NotFoundPage() {
    return (
        <Wrapper>
            <Code>404</Code>
            <p style={{ color: "#6b7280", fontSize: 18 }}>This page doesn't exist 🐾</p>
            <HomeLink to="/">Back to Gallery</HomeLink>
        </Wrapper>
    );
}
