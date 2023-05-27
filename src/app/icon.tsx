import { ImageResponse } from 'next/server';

// TODO: finish this file
interface ImageMetadata {
	id?: string;
	alt: string;
	size: ImageMetadataSize;
	contentType: string;
}

interface ImageMetadataSize {
	width: number;
	height: number;
}

export async function generateImageMetadata() {
	const images: Array<ImageMetadata> = [];
	return images;
}

export default async function Icon() {
	const text = "placeholder";

	return new ImageResponse(
		(
			<div
				style={
					{
						// ...
					}
				}
			>
				{text}
			</div>
		)
	);
}
