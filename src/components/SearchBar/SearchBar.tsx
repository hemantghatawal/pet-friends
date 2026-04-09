import { useEffect, useRef, useState } from "react";
import { Wrapper, Input } from "./SearchBar.styles";

type SearchBarProps = {
    value: string;
    onChange: (query: string) => void;
    debounceMs?: number;
};

export default function SearchBar({ value, onChange, debounceMs = 300 }: SearchBarProps) {
    const [inputValue, setInputValue] = useState(value);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Keep local input in sync if parent resets the value (e.g. clear button)
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);

        // Debounce: cancel previous timer, fire onChange after delay
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => onChange(val), debounceMs);
    };

    return (
        <Wrapper>
            <Input
                type="search"
                placeholder="Search by name or description…"
                value={inputValue}
                onChange={handleChange}
                aria-label="Search pets"
            />
        </Wrapper>
    );
}
