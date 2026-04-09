import styled from "styled-components";
import { Link } from "react-router-dom";

export const Article = styled.article`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;

  &[data-selected="true"] {
    outline: 3px solid #166534;
    transform: scale(0.98);
  }
`;

export const CheckboxWrapper = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #fff;
  }

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    width: 14px;
    height: 14px;
    border-radius: 3px;
    border: 2px solid #aaa;
    background: transparent;
    display: block;
  }

  input:checked + span {
    background: #166534;
    border-color: #166534;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4l3 3 5-6' stroke='%23fff' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px;
  }
`;

export const CardImage = styled(Link)`
  display: block;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: opacity 0.15s;
  }
  &:hover img { opacity: 0.9; }
`;

export const CardBody = styled.div`
  padding: 12px;
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const CardDesc = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`;

export const CardDate = styled.time`
  font-size: 12px;
  color: #888;
`;
