import { useState, useEffect } from "react";
import type { Pet } from "../types/pet.types";

interface UseFetchPetsResult {
  pets: Pet[];
  loading: boolean;
  error: string | null;
  isEmpty: boolean;
}

// Module-level cache — survives component unmounts so navigating away and back
// doesn't trigger a new network request
let cachedPets: Pet[] | null = null;
let fetchPromise: Promise<Pet[]> | null = null;

function useFetchPets(): UseFetchPetsResult {
  const [pets, setPets] = useState<Pet[]>(cachedPets ?? []);
  const [loading, setLoading] = useState(cachedPets === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedPets !== null) return; // already have data, skip fetch

    if (!fetchPromise) {
      fetchPromise = fetch("https://eulerity-hackathon.appspot.com/pets")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch pets");
          return res.json() as Promise<Pet[]>;
        });
    }

    fetchPromise
      .then((data) => {
        cachedPets = data;
        setPets(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
        fetchPromise = null; // allow retry on error
      });
  }, []);

  return { pets, loading, error, isEmpty: !loading && !error && pets.length === 0 };
}

export default useFetchPets;
