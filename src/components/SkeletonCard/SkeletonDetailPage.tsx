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

const Block = styled.div<{ w?: string; h: string; radius?: string; mt?: string }>`
  width: ${({ w }) => w ?? "100%"};
  height: ${({ h }) => h};
  border-radius: ${({ radius }) => radius ?? "6px"};
  margin-top: ${({ mt }) => mt ?? "0"};
  ${shimmerBg}
`;

const Wrapper = styled.div`
  margin: 40px auto;
  padding: 0 16px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
`;

const Section = styled.div<{ pad?: string; border?: boolean }>`
  padding: ${({ pad }) => pad ?? "20px 24px"};
  border-bottom: ${({ border }) => border ? "1px solid #f3f4f6" : "none"};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export default function SkeletonDetailPage() {
    return (
        <Wrapper>
            <Card>
                {/* Back link row */}
                <Section pad="16px 24px" border>
                    <Block w="80px" h="14px" />
                </Section>

                {/* Title / description / date row */}
                <Section border>
                    <Row>
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                            <Block w="40%" h="22px" />
                            <Block w="80%" h="14px" />
                            <Block w="60%" h="14px" />
                        </div>
                        <Block w="100px" h="14px" />
                    </Row>
                </Section>

                {/* Hero image */}
                <Section pad="24px">
                    <Block h="55vh" radius="12px" />
                </Section>
            </Card>
        </Wrapper>
    );
}
