import { useParams } from "react-router-dom";
import useFetchPets from "../hooks/useFetchPets";
import {
    Wrapper, BackLink, Card, HeroImage,
    Body, Title, DateLabel, Description, NotFound,
} from "./PetDetailPage.styles";

export default function PetDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { pets, loading, error } = useFetchPets();

    if (loading) return <Wrapper><p>Loading…</p></Wrapper>;
    if (error) return <Wrapper><p style={{ color: "#dc2626" }}>Error: {error}</p></Wrapper>;

    // Decode the base64 URL param back to the original image URL
    const petUrl = id ? atob(id) : "";
    const pet = pets.find((p) => p.url === petUrl);

    if (!pet) {
        return (
            <NotFound>
                <p>Pet not found 🐾</p>
                <BackLink to="/">← Back to Gallery</BackLink>
            </NotFound>
        );
    }

    const formattedDate = new Date(pet.created).toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric",
    });

    return (
        <Wrapper>
            <BackLink to="/">← Back to Gallery</BackLink>
            <Card>
                <HeroImage src={pet.url} alt={pet.title} />
                <Body>
                    <Title>{pet.title}</Title>
                    <DateLabel dateTime={pet.created}>Added {formattedDate}</DateLabel>
                    <Description>{pet.description}</Description>
                </Body>
            </Card>
        </Wrapper>
    );
}
