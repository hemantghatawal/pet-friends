import type { Pet } from "../types/pet.types";

const PetCard = ({ pet }: { pet: Pet }) => {
  const formattedDate = pet.created
    ? new Date(pet.created).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <article className="pet-card">
      <div className="pet-card-img">
        <img src={pet.url} alt={pet.title} loading="lazy" />
      </div>
      <div className="pet-card-body">
        <h2 className="pet-card-title">{pet.title}</h2>
        <div className="pet-card-details">
          <p className="pet-card-desc">{pet.description}</p>
          {formattedDate && (
            <time className="pet-card-date" dateTime={pet.created}>
              Added {formattedDate}
            </time>
          )}
        </div>
      </div>
    </article>
  );
};

export default PetCard;
