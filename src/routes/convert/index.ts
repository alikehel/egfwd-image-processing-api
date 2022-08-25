import express from 'express';
import resizeImage from '../../functions/resizeImage';
import checkImageCached from '../../functions/checkImageCached';
import checkImageExists from '../../functions/checkImageExists';

const convertRoute = express.Router();

convertRoute.get('/', async (req, res) => {
	const imageName = req.query.imageName as string;
	const width = parseInt(req.query.width as string);
	const height = parseInt(req.query.height as string);
	if (await checkImageCached(imageName, width, height)) {
		res.sendFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`, { root: '.' });
	} else if (!(await checkImageExists(imageName))) {
		res.send("Specified image doesn't exist on the server");
	} else {
		const resizedImage = await resizeImage(imageName, width, height);
		res.sendFile(resizedImage, { root: '.' });
	}
});

export default convertRoute;
