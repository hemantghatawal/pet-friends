import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px 0;
  flex-wrap: wrap;
`;

export const Label = styled.span`
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
`;

export const SortBtn = styled.button<{ $active: boolean }>`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: 1.5px solid ${({ $active }) => ($active ? "var(--color-primary)" : "#d1d5db")};
  background: ${({ $active }) => ($active ? "var(--color-primary)" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#374151")};

  &:hover:not([aria-pressed="true"]) {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;
