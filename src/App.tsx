import useFetchPets from "./hooks/useFetchPets";
import "./App.css";
import PetCard from "./components/PetCard";

function App() {
  const { pets, loading, error } = useFetchPets();

  return (
    <>
      <main className="center">
        <div className="pet-grid">
          {loading && <p>Loading pets...</p>}

          {error && <p style={{ color: "red" }}>Error: Loading Pets Images</p>}

          {!loading &&
            !error &&
            pets?.length > 0 &&
            pets.map((pet) => <PetCard key={pet.url} pet={pet} />)}

          {!loading && !error && pets?.length === 0 && <p>No pets found 🐾</p>}
        </div>
      </main>
    </>
  );
}

export default App;
