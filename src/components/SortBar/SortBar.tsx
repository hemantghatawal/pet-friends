import { memo } from "react";
import type { SortOption } from "../../constants";
import { SORT_OPTIONS } from "../../constants";
import { Wrapper, Label, SortBtn } from "./SortBar.styles";

type SortBarProps = {
    value: SortOption;
    onChange: (sort: SortOption) => void;
};

const SortBar = memo(function SortBar({ value, onChange }: SortBarProps) {
    return (
        <Wrapper>
            <Label>Sort:</Label>
            {SORT_OPTIONS.map((opt) => (
                <SortBtn
                    key={opt.value}
                    $active={value === opt.value}
                    aria-pressed={value === opt.value}
                    onClick={() => onChange(opt.value)}
                >
                    {opt.label}
                </SortBtn>
            ))}
        </Wrapper>
    );
});

export default SortBar;
