import { Carousel } from "react-responsive-carousel";

interface CarrouselProps {
	children: React.ReactChild[];
	autoPlay?: boolean;
	className?: string;
}

export default function CarrouselComponent({
	children,
	autoPlay,
	className
}: CarrouselProps) {
	return (
		<Carousel
			infiniteLoop
			interval={4000}
			autoPlay={autoPlay}
			className={className}
			autoFocus
			dynamicHeight
			showStatus={false}
			swipeScrollTolerance={100}
			preventMovementUntilSwipeScrollTolerance
		>
			{children}
		</Carousel>
	);
}
