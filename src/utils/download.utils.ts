import type { Pet } from "../types/pet.types";

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export async function downloadImages(pets: Pet[], selected: Set<string>) {
  const targets = pets.filter((p) => selected.has(p.url));
  for (const pet of targets) {
    try {
      const res = await fetch(pet.url);
      const blob = await res.blob();
      const ext = blob.type.split("/")[1] || "jpg";
      const filename = `${pet.title.replace(/\s+/g, "_") || "pet"}.${ext}`;
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(objectUrl);

      // small delay to avoid browser throttling
      await new Promise((r) => setTimeout(r, 200));
    } catch {
      console.error(`Failed to download ${pet.url}`);
    }
  }
}
