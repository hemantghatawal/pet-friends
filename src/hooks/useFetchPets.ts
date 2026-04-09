import { useState, useEffect } from "react";
import type { Pet } from "../types/pet.types";

interface UseFetchPetsResult {
  pets: Pet[];
  loading: boolean;
  error: string | null;
  isEmpty: boolean;
}

function useFetchPets(): UseFetchPetsResult {
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

  return { pets, loading, error, isEmpty: !loading && !error && pets.length === 0 };
}

export default useFetchPets;
