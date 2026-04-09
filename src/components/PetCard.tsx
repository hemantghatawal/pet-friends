import { memo, useCallback } from "react";
import type { Pet } from "../types/pet.types";
import {
  Article,
  CheckboxWrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardDesc,
  CardDate,
} from "./PetCard.styles";

type PetCardProps = {
  pet: Pet;
  isSelected: boolean;
  onToggle: (url: string) => void;
};

const PetCard = memo(({ pet, isSelected, onToggle }: PetCardProps) => {
  const formattedDate = pet.created
    ? new Date(pet.created).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : null;

  // Stable per-card handler — useCallback with pet.url dep so memo works correctly
  const handleChange = useCallback(() => {
    onToggle(pet.url);
  }, [onToggle, pet.url]);

  return (
    <Article data-selected={isSelected}>
      <CheckboxWrapper aria-label={`Select ${pet.title}`}>
        <input type="checkbox" checked={isSelected} onChange={handleChange} />
        <span />
      </CheckboxWrapper>

      <CardImage to={`/pets/${btoa(pet.url)}`}>
        <img src={pet.url} alt={pet.title} loading="lazy" />
      </CardImage>
      <CardBody>
        <CardTitle>{pet.title}</CardTitle>
        <CardDesc>{pet.description}</CardDesc>
        {formattedDate && (
          <CardDate dateTime={pet.created}>Added {formattedDate}</CardDate>
        )}
      </CardBody>
    </Article>
  );
});

export default PetCard;
