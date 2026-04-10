import { useCallback, useState } from "react";
import { SelectionContext } from "./selection.context";

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleSelect = useCallback((url: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(url)) {
        next.delete(url);
      } else {
        next.add(url);
      }
      return next;
    });
  }, []);

  const selectAll = useCallback((urls: string[]) => {
    setSelected(new Set(urls));
  }, []);

  const clearSelection = useCallback(() => {
    setSelected(new Set());
  }, []);

  return (
    <SelectionContext.Provider
      value={{ selected, toggleSelect, selectAll, clearSelection }}
    >
      {children}
    </SelectionContext.Provider>
  );
}
