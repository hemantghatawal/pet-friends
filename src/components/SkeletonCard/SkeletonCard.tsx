import { Card, ImageSkeleton, TitleSkeleton, DateSkeleton } from "./SkeletonCard.styles";

export default function SkeletonCard() {
    return (
        <Card>
            <ImageSkeleton />
            <TitleSkeleton />
            <DateSkeleton />
        </Card>
    );
}
