import { Bar, Info, SizeLabel, Actions, GhostBtn, DownloadBtn } from "./SelectionBar.styles";

type SelectionBarProps = {
  count: number;
  totalCount: number;
  estimatedSize: string;
  onDownload: () => void;
  onClear: () => void;
  onSelectAll: () => void;
  downloading: boolean;
};

export default function SelectionBar({
  count,
  totalCount,
  estimatedSize,
  onDownload,
  onClear,
  onSelectAll,
  downloading,
}: SelectionBarProps) {
  // if (count === 0) return null;

  const allSelected = count === totalCount;

  return (
    <Bar role="status" aria-live="polite">
      <Info>
        <strong>{count}</strong> {count === 1 ? "image" : "images"} selected
        &nbsp;&middot;&nbsp;
        <SizeLabel>~{estimatedSize}</SizeLabel>
      </Info>
      <Actions>
        <GhostBtn onClick={onSelectAll} disabled={downloading || allSelected}>
          Select All
        </GhostBtn>
        <GhostBtn onClick={onClear} disabled={downloading}>
          Clear
        </GhostBtn>
        <DownloadBtn onClick={onDownload} disabled={downloading}>
          {downloading ? "Downloading…" : `Download ${count}`}
        </DownloadBtn>
      </Actions>
    </Bar>
  );
}
