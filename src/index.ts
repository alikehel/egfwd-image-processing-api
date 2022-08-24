import express from 'express';
import sharp from 'sharp';
import fs from 'fs/promises';

const app = express();
const port = 3000;

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

const checkImageExist = async (imageName: string, width: number, height: number) => {
	try {
		await fs.readFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`);
		return true;
	} catch {
		return false;
	}
};

app.get('/convert', async (req, res) => {
	const imageName = req.query.imageName as string;
	const width = parseInt(req.query.width as string);
	const height = parseInt(req.query.height as string);
	if (await checkImageExist(imageName, width, height)) {
		res.sendFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`, { root: '.' });
	} else {
		resizeImage(imageName, width, height, res);
	}
});

app.listen(port, () => {
	console.log(`Server is running at port http://localhost:${port}`);
});
