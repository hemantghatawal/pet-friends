import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from { opacity: 0; transform: translateX(-50%) translateY(12px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
`;

export const Bar = styled.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border-radius: 14px;
  background: var(--color-primary);
  color: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  z-index: 100;
  animation: ${slideUp} 0.2s ease;

  @media (max-width: 600px) {
    bottom: 12px;
    left: 12px;
    right: 12px;
    transform: none;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Info = styled.span`
  font-size: 14px;
  opacity: 0.9;

  strong {
    font-weight: 700;
  }
`;

export const SizeLabel = styled.span`
  opacity: 0.65;
  font-size: 13px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const GhostBtn = styled.button`
  padding: 7px 14px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  background: transparent;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DownloadBtn = styled.button`
  padding: 7px 16px;
  border-radius: 8px;
  border: none;
  background: var(--color-secondary);
  color: #000;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
