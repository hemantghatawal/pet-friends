import { createContext, useCallback, useContext, useState } from "react";

interface SelectionContextValue {
    selected: Set<string>;
    toggleSelect: (url: string) => void;
    selectAll: (urls: string[]) => void;
    clearSelection: () => void;
}

const SelectionContext = createContext<SelectionContextValue | null>(null);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
    const [selected, setSelected] = useState<Set<string>>(new Set());

    const toggleSelect = useCallback((url: string) => {
        setSelected((prev) => {
            const next = new Set(prev);
            next.has(url) ? next.delete(url) : next.add(url);
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
        <SelectionContext.Provider value={{ selected, toggleSelect, selectAll, clearSelection }}>
            {children}
        </SelectionContext.Provider>
    );
}

// Typed hook — throws if used outside provider
export function useSelection() {
    const ctx = useContext(SelectionContext);
    if (!ctx) throw new Error("useSelection must be used within SelectionProvider");
    return ctx;
}
