import { useCallback, useState } from "react";
import useFetchPets from "./hooks/useFetchPets";
import PetCard from "./components/PetCard";
import SelectionBar from "./components/SelectionBar/SelectionBar";
import { downloadImages, formatBytes } from "./utils/download.utils";
import { ESTIMATED_SIZE_PER_IMAGE } from "./constants";
import { PageWrapper, PetGrid, Message } from "./App.styles";

function App() {
  const { pets, loading, error, isEmpty } = useFetchPets();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    await downloadImages(pets, selected);
    setDownloading(false);
  };

  // Stable reference — PetCard's useCallback depends on this not changing
  const toggleSelect = useCallback((url: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(url) ? next.delete(url) : next.add(url);
      return next;
    });
  }, []);

  const selectAll = useCallback(() => {
    setSelected(new Set(pets.map((p) => p.url)));
  }, [pets]);

  const estimatedSize = formatBytes(selected.size * ESTIMATED_SIZE_PER_IMAGE);

  function renderContent() {
    if (loading) return <Message>Loading pets...</Message>;
    if (error) return <Message $error>Error: {error}</Message>;
    if (isEmpty) return <Message>No pets found 🐾</Message>;

    return pets.map((pet) => (
      <PetCard
        key={pet.url}
        pet={pet}
        isSelected={selected.has(pet.url)}
        onToggle={toggleSelect}
      />
    ));
  }

  return (
    <PageWrapper>
      <PetGrid>{renderContent()}</PetGrid>

      <SelectionBar
        count={selected.size}
        totalCount={pets.length}
        estimatedSize={estimatedSize}
        onDownload={handleDownload}
        onClear={() => setSelected(new Set())}
        onSelectAll={selectAll}
        downloading={downloading}
      />
    </PageWrapper>
  );
}

export default App;
