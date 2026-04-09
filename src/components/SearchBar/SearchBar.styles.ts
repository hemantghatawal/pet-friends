import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 12px 16px 0;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 9px 14px;
  border-radius: 10px;
  border: 1.5px solid #d1d5db;
  font-size: 14px;
  color: #111827;
  outline: none;
  transition: border-color 0.15s;
  background: #fff;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #166534;
  }
`;
