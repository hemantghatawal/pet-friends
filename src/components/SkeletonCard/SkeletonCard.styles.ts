import styled, { keyframes, css } from "styled-components";

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const shimmerBg = css`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s infinite linear;
`;

export const Card = styled.div`
  background: #fffef9;
  border-radius: 4px;
  padding: 10px 10px 40px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.08);
`;

export const ImageSkeleton = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 2px;
  ${shimmerBg}
`;

export const TitleSkeleton = styled.div`
  margin-top: 12px;
  height: 12px;
  width: 60%;
  border-radius: 4px;
  ${shimmerBg}
`;

export const DateSkeleton = styled.div`
  margin-top: 8px;
  height: 10px;
  width: 35%;
  border-radius: 4px;
  ${shimmerBg}
`;
