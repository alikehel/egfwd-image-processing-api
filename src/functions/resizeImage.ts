import sharp from 'sharp';
import express from 'express';
import fs from 'fs/promises';

const resizeImage = async (imageName: string, width: number, height: number, res: express.Response) => {
	const image = await fs.readFile(`./assets/images/${imageName}.jpg`);

	sharp(image)
		.resize(width, height, {
			kernel: sharp.kernel.nearest,
			fit: 'fill',
			position: 'centre',
			background: { r: 255, g: 255, b: 255, alpha: 0.5 },
		})
		.toFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`)
		.then(() => {
			res.sendFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`, { root: '.' });
			console.log('RESIZING DONE');
			// console.log(data);
			// output.png is a 200 pixels wide and 300 pixels high image
			// containing a nearest-neighbour scaled version
			// contained within the north-east corner of a semi-transparent white canvas
		});
};

export default resizeImage;
