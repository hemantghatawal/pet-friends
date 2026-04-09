import { useState, useEffect } from "react";
import type { Pet } from "../types/pet.types";

function useFetchPets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://eulerity-hackathon.appspot.com/pets")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch pets");
        return res.json();
      })
      .then((data: Pet[]) => {
        setPets(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { pets, loading, error };
}

export default useFetchPets;
