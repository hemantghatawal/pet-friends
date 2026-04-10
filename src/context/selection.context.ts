import { createContext, useContext } from "react";

export interface SelectionContextValue {
  selected: Set<string>;
  toggleSelect: (url: string) => void;
  selectAll: (urls: string[]) => void;
  clearSelection: () => void;
}

export const SelectionContext = createContext<SelectionContextValue | null>(
  null,
);


export function useSelection() {
  const ctx = useContext(SelectionContext);
  if (!ctx) {
    throw new Error("useSelection must be used within SelectionProvider");
  }
  return ctx;
}
