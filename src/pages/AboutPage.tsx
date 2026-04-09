import { Wrapper, Heading, Sub, FeatureList, FeatureItem } from "./AboutPage.styles";

const FEATURES = [
    { icon: "🖼️", text: "Browse a gallery of pets fetched from a live API" },
    { icon: "☑️", text: "Select multiple images and download them in one click" },
    { icon: "🔍", text: "Search pets by name or description in real time" },
    { icon: "↕️", text: "Sort by name or date in either direction" },
    { icon: "📄", text: "View a full detail page for each pet" },
    { icon: "📱", text: "Fully responsive — works on mobile, tablet, and desktop" },
];

export default function AboutPage() {
    return (
        <Wrapper>
            <Heading>About PetFriends</Heading>
            <Sub>
                PetFriends is a pet image gallery built with React, TypeScript, and
                styled-components. It demonstrates modern front-end patterns including
                custom hooks, context-based global state, dynamic routing, and
                performance optimisation with memo and useMemo.
            </Sub>
            <Sub>
                Built as part of a front-end challenge — focused on clean architecture,
                scalability, and a smooth user experience.
            </Sub>

            <FeatureList>
                {FEATURES.map((f) => (
                    <FeatureItem key={f.text}>
                        <span className="icon">{f.icon}</span>
                        <span>{f.text}</span>
                    </FeatureItem>
                ))}
            </FeatureList>
        </Wrapper>
    );
}
