import React from "react";

export default function BoardIcon({
	width = "32",
	height = "32",
	fill = "white",
}) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.9997 24.0002C16.3533 24.0002 16.6924 23.8597 16.9425 23.6096C17.1925 23.3596 17.333 23.0205 17.333 22.6668L17.333 9.33349C17.333 8.97987 17.1925 8.64073 16.9425 8.39068C16.6924 8.14064 16.3533 8.00016 15.9997 8.00016C15.6461 8.00016 15.3069 8.14064 15.0569 8.39068C14.8068 8.64073 14.6663 8.97987 14.6663 9.33349L14.6663 22.6668C14.6663 23.0204 14.8068 23.3596 15.0569 23.6096C15.3069 23.8597 15.6461 24.0002 15.9997 24.0002ZM22.6663 16.0002C23.02 16.0002 23.3591 15.8597 23.6092 15.6096C23.8592 15.3596 23.9997 15.0205 23.9997 14.6668L23.9997 9.3335C23.9997 8.97987 23.8592 8.64073 23.6092 8.39068C23.3591 8.14064 23.02 8.00016 22.6663 8.00016C22.3127 8.00016 21.9736 8.14064 21.7235 8.39068C21.4735 8.64073 21.333 8.97987 21.333 9.33349L21.333 14.6668C21.333 15.0205 21.4735 15.3596 21.7235 15.6096C21.9736 15.8597 22.3127 16.0002 22.6663 16.0002ZM9.33301 18.6668C9.68663 18.6668 10.0258 18.5264 10.2758 18.2763C10.5259 18.0263 10.6663 17.6871 10.6663 17.3335L10.6663 9.33349C10.6663 8.97987 10.5259 8.64073 10.2758 8.39068C10.0258 8.14064 9.68663 8.00016 9.33301 8.00016C8.97939 8.00016 8.64025 8.14064 8.3902 8.39068C8.14015 8.64073 7.99968 8.97987 7.99968 9.33349L7.99967 17.3335C7.99967 17.6871 8.14015 18.0263 8.3902 18.2763C8.64025 18.5264 8.97939 18.6668 9.33301 18.6668ZM6.66634 29.3335L25.333 29.3335C26.3939 29.3335 27.4113 28.9121 28.1614 28.1619C28.9116 27.4118 29.333 26.3944 29.333 25.3335L29.333 6.66683C29.333 5.60596 28.9116 4.58855 28.1614 3.8384C27.4113 3.08826 26.3939 2.66683 25.333 2.66683L6.66634 2.66683C5.60548 2.66683 4.58806 3.08825 3.83791 3.8384C3.08777 4.58854 2.66634 5.60596 2.66634 6.66683L2.66634 25.3335C2.66634 26.3944 3.08777 27.4118 3.83791 28.1619C4.58806 28.9121 5.60547 29.3335 6.66634 29.3335ZM5.33301 6.66683C5.33301 6.3132 5.47348 5.97407 5.72353 5.72402C5.97358 5.47397 6.31272 5.33349 6.66634 5.33349L25.333 5.3335C25.6866 5.3335 26.0258 5.47397 26.2758 5.72402C26.5259 5.97407 26.6663 6.31321 26.6663 6.66683L26.6663 25.3335C26.6663 25.6871 26.5259 26.0263 26.2758 26.2763C26.0258 26.5264 25.6866 26.6668 25.333 26.6668L6.66634 26.6668C6.31272 26.6668 5.97358 26.5264 5.72353 26.2763C5.47348 26.0263 5.33301 25.6871 5.33301 25.3335L5.33301 6.66683Z"
				fill={fill}
			/>
		</svg>
	);
}
