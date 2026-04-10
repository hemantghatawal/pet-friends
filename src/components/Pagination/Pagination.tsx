import { Wrapper, PageBtn, Ellipsis } from "./Pagination.styles";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    // Build page number list with ellipsis: [1] ... [4] [5] [6] ... [10]
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (currentPage > 3) pages.push("...");
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }
        if (currentPage < totalPages - 2) pages.push("...");
        pages.push(totalPages);
    }

    return (
        <Wrapper>
            <PageBtn onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                ←
            </PageBtn>

            {pages.map((p, i) =>
                p === "..." ? (
                    <Ellipsis key={`ellipsis-${i}`}>…</Ellipsis>
                ) : (
                    <PageBtn
                        key={p}
                        $active={p === currentPage}
                        onClick={() => onPageChange(p)}
                    >
                        {p}
                    </PageBtn>
                )
            )}

            <PageBtn onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                →
            </PageBtn>
        </Wrapper>
    );
}
