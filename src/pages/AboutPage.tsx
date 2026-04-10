import { Wrapper, Heading, Sub, FeatureList, FeatureItem, TechStack, TechTag, Links, LinkBtn } from "./AboutPage.styles";

const FEATURES = [
    { icon: "🖼️", text: "Pet gallery fetched from a live API with loading skeletons" },
    { icon: "☑️", text: "Select multiple images and download them in one click" },
    { icon: "🔍", text: "Real-time search filtering by name or description" },
    { icon: "↕️", text: "Sort by name A-Z / Z-A or date newest / oldest" },
    { icon: "📄", text: "Detail view for each pet with dynamic routing" },
    { icon: "📱", text: "Fully responsive — 1 column mobile, 2 tablet, 4 desktop" },
    { icon: "💾", text: "Selection persists across route navigation via Context" },
    { icon: "⚡", text: "Optimised with React.memo, useCallback, useMemo and data caching" },
];

const TECH = ["React 19", "TypeScript", "styled-components", "react-router-dom", "Vite"];

export default function AboutPage() {
    return (
        <Wrapper>
            <Heading>Hi, I'm [Your Name] 👋</Heading>
            <Sub>
                I'm a front-end developer who enjoys building clean, performant, and
                well-structured UIs. This project was built as part of a front-end
                challenge — I used it as an opportunity to demonstrate my approach to
                architecture, state management, and user experience.
            </Sub>

            <Heading as="h2">What this app does</Heading>
            <FeatureList>
                {FEATURES.map((f) => (
                    <FeatureItem key={f.text}>
                        <span className="icon">{f.icon}</span>
                        <span>{f.text}</span>
                    </FeatureItem>
                ))}
            </FeatureList>

            <Heading as="h2">Tech used</Heading>
            <TechStack>
                {TECH.map((t) => <TechTag key={t}>{t}</TechTag>)}
            </TechStack>

            <Links>
                <LinkBtn href="https://github.com/hemantghatawal/" target="_blank" rel="noreferrer">GitHub</LinkBtn>
                <LinkBtn href="https://linkedin.com/in/hemant-ghatawal" target="_blank" rel="noreferrer">LinkedIn</LinkBtn>
            </Links>
        </Wrapper>
    );
}
