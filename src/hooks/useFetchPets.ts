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
    const fetchPets = async () => {
      try {
        const res = await fetch("https://eulerity-hackathon.appspot.com/pets");
        if (!res.ok) throw new Error("Failed to fetch pets");

        const data: Pet[] = await res.json();
        setPets(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  return {
    pets,
    loading,
    error,
    isEmpty: !loading && !error && pets.length === 0,
  };
}

export default useFetchPets;