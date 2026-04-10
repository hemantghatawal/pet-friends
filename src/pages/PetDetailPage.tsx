import { useParams, useNavigate } from "react-router-dom";
import useFetchPets from "../hooks/useFetchPets";
import {
    Wrapper, BackLink, Card, HeroImage,
    Body, Title, DateLabel, Description, NotFound,
    Head,
    HeadContent,
    HeadBackLink,
} from "./PetDetailPage.styles";

export default function PetDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
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
            <Card>
                <HeadBackLink>
                    <BackLink to="#" onClick={() => navigate(-1)}>
                        ← Back
                    </BackLink>
                </HeadBackLink>
                <Head>

                    <HeadContent>
                        <Title>{pet.title}</Title>
                        <Description>{pet.description}</Description>
                        <DateLabel dateTime={pet.created}>
                            {formattedDate}
                        </DateLabel>
                    </HeadContent>
                </Head>
                <Body>
                    <HeroImage src={pet.url} alt={pet.title} />
                </Body>
            </Card>
        </Wrapper>
    );
}
