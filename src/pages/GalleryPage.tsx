import { useMemo, useState } from "react";
import useFetchPets from "../hooks/useFetchPets";
import PetCard from "../components/PetCard";
import SelectionBar from "../components/SelectionBar/SelectionBar";
import SortBar from "../components/SortBar/SortBar";
import SearchBar from "../components/SearchBar/SearchBar";
import Pagination from "../components/Pagination/Pagination";
import SkeletonCard from "../components/SkeletonCard/SkeletonCard";
import { useSelection } from "../context/selection.context";
import { downloadImages, formatBytes } from "../utils/download.utils";
import { ESTIMATED_SIZE_PER_IMAGE, PAGE_SIZE } from "../constants";
import type { SortOption } from "../constants";
import { PageWrapper, PetGrid, Message } from "../App.styles";

export default function GalleryPage() {
  const { pets, loading, error, isEmpty } = useFetchPets();
  const { selected, toggleSelect, selectAll, clearSelection } = useSelection();
  const [downloading, setDownloading] = useState(false);
  const [sort, setSort] = useState<SortOption>("name-asc");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const petsWithTs = useMemo(
    () => pets.map((p) => ({ ...p, ts: new Date(p.created).getTime() })),
    [pets],
  );

  // Filter + sort over the full list
  const filteredSorted = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? petsWithTs.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q),
        )
      : petsWithTs;

    const copy = [...filtered];
    switch (sort) {
      case "name-asc":
        return copy.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return copy.sort((a, b) => b.title.localeCompare(a.title));
      case "date-newest":
        return copy.sort((a, b) => b.ts - a.ts);
      case "date-oldest":
        return copy.sort((a, b) => a.ts - b.ts);
    }
  }, [petsWithTs, sort, query]);

  const totalPages = Math.ceil(filteredSorted.length / PAGE_SIZE);

  // Slice the current page out of the full filtered+sorted list
  const displayedPets = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredSorted.slice(start, end);
  }, [filteredSorted, page]);

  const handleDownload = async () => {
    setDownloading(true);
    await downloadImages(pets, selected);
    setDownloading(false);
  };

  const estimatedSize = formatBytes(selected.size * ESTIMATED_SIZE_PER_IMAGE);

  function renderContent() {
    if (loading)
      return (
        <>
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </>
      );
    if (error) return <Message $error>Error: {error}</Message>;
    if (isEmpty) return <Message>No pets found 🐾</Message>;
    if (filteredSorted.length === 0)
      return <Message>No results for "{query}" 🔍</Message>;

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

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <SelectionBar
        count={selected.size}
        totalCount={pets.length}
        estimatedSize={estimatedSize}
        onDownload={handleDownload}
        onClear={clearSelection}
        onSelectAll={() => selectAll(filteredSorted.map((p) => p.url))}
        downloading={downloading}
      />
    </PageWrapper>
  );
}
