import { useCallback, useMemo, useState } from "react";
import useFetchPets from "./hooks/useFetchPets";
import PetCard from "./components/PetCard";
import SelectionBar from "./components/SelectionBar/SelectionBar";
import SortBar from "./components/SortBar/SortBar";
import SearchBar from "./components/SearchBar/SearchBar";
import { downloadImages, formatBytes } from "./utils/download.utils";
import { ESTIMATED_SIZE_PER_IMAGE } from "./constants";
import type { SortOption } from "./constants";
import { PageWrapper, PetGrid, Message } from "./App.styles";

function App() {
  const { pets, loading, error, isEmpty } = useFetchPets();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [downloading, setDownloading] = useState(false);
  const [sort, setSort] = useState<SortOption>("name-asc");
  const [query, setQuery] = useState("");

  // Pre-compute timestamps once so sort comparisons don't call new Date() repeatedly
  const petsWithTs = useMemo(
    () => pets.map((p) => ({ ...p, ts: new Date(p.created).getTime() })),
    [pets]
  );

  // Filter then sort — both derived, never mutate source
  const displayedPets = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = q
      ? petsWithTs.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
      : petsWithTs;

    const copy = [...filtered];
    switch (sort) {
      case "name-asc": return copy.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc": return copy.sort((a, b) => b.title.localeCompare(a.title));
      case "date-newest": return copy.sort((a, b) => b.ts - a.ts);
      case "date-oldest": return copy.sort((a, b) => a.ts - b.ts);
    }
  }, [petsWithTs, sort, query]);

  const handleDownload = async () => {
    setDownloading(true);
    await downloadImages(pets, selected);
    setDownloading(false);
  };

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
    if (displayedPets.length === 0) return <Message>No results for "{query}" 🔍</Message>;

    return displayedPets.map((pet) => (
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
      <SearchBar value={query} onChange={setQuery} />
      <SortBar value={sort} onChange={setSort} />
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
