import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 24px 16px 48px;
`;

export const PageBtn = styled.button<{ $active?: boolean }>`
  min-width: 36px;
  height: 36px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1.5px solid ${({ $active }) => ($active ? "var(--color-primary)" : "#d1d5db")};
  background: ${({ $active }) => ($active ? "var(--color-primary)" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#374151")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover:not(:disabled) {
    border-color: var(--color-primary);
    color: ${({ $active }) => ($active ? "#fff" : "var(--color-primary)")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Ellipsis = styled.span`
  font-size: 14px;
  color: #9ca3af;
  padding: 0 4px;
`;
