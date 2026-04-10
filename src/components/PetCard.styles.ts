import styled from "styled-components";
import { Link } from "react-router-dom";

export const Article = styled.article`
  background: #fffef9;
  border-radius: 4px;
  position: relative;
  /* Polaroid: equal padding on sides/top, more at bottom */
  padding: 10px 10px 40px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  /* Slight random tilt per card using nth-child for variety */
  &:nth-child(odd)  { transform: rotate(-1deg); }
  &:nth-child(even) { transform: rotate(0.8deg); }

  &:hover {
    transform: rotate(0deg) translateY(-6px) scale(1.02);
    box-shadow:
      0 8px 16px rgba(0, 0, 0, 0.15),
      0 20px 40px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  &[data-selected="true"] {
    outline: 3px solid var(--color-primary);
    outline-offset: 3px;
    transform: rotate(0deg) scale(0.97);
  }
`;

export const CheckboxWrapper = styled.label`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  transition: background 0.15s;

  &:hover { background: #fff; }

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
    transition: background 0.15s, border-color 0.15s;
  }

  input:checked + span {
    background: var(--color-primary);
    border-color: var(--color-primary);
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4l3 3 5-6' stroke='%23fff' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px;
  }
`;

/* Image fills the inner frame — no border-radius, sharp edges like a photo print */
export const CardImage = styled(Link)`
  display: flex;
  justify-content: center;   /* horizontal center */
  align-items: center;       /* vertical center (optional) */

  img {
    /* width: 100%; */
    height: 200px;
    object-fit: cover;
    display: block;
    transition: opacity 0.15s;
  }

  &:hover img { opacity: 0.92; }
`;

/* Bottom caption area — sits in the white border below the photo */
export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 2px 0;
`;

export const CardTitle = styled.h2`
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
`;

export const CardDesc = styled.p`
  font-size: 12px;
  color: #777;
  margin: 4px 0 0;
  font-family: "Courier New", Courier, monospace;
`;

export const CardDate = styled.time`
  font-size: 11px;
  color: #312c2cff;
  font-family: "Courier New", Courier, monospace;
  white-space: nowrap;
`;
