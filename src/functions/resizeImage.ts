import sharp from 'sharp';
import fs from 'fs/promises';

const resizeImage = async (imageName: string, width: number, height: number) => {
	const image = await fs.readFile(`./assets/images/${imageName}.jpg`);
	const resizedImage = await sharp(image).resize(width, height, {
		kernel: sharp.kernel.nearest,
		fit: 'fill',
		position: 'centre',
		background: { r: 255, g: 255, b: 255, alpha: 0.5 },
	});
	await resizedImage.toFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`);
	console.log('RESIZED');
	return `./assets/thumbnails/${imageName}-${width}-${height}.jpg`;
	// sharp(image)
	// 	.resize(width, height, {
	// 		kernel: sharp.kernel.nearest,
	// 		fit: 'fill',
	// 		position: 'centre',
	// 		background: { r: 255, g: 255, b: 255, alpha: 0.5 },
	// 	})
	// 	.toFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`)
	// 	.then(() => {
	// 		return `./assets/thumbnails/${imageName}-${width}-${height}.jpg`;
	// 		// res.sendFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`, { root: '.' });
	// 		console.log('RESIZING DONE');
	// 	});
};

export default resizeImage;
