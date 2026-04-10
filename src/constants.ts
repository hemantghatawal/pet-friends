export const PAGE_SIZE = 8;

// Rough per-image size estimate used for the selection bar total size indicator
export const ESTIMATED_SIZE_PER_IMAGE = 200 * 1024;

export type SortOption = "name-asc" | "name-desc" | "date-newest" | "date-oldest";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "name-asc",     label: "Name A→Z" },
  { value: "name-desc",    label: "Name Z→A" },
  { value: "date-newest",  label: "Date (Newest)" },
  { value: "date-oldest",  label: "Date (Oldest)" },
];
