import express from 'express';
import resizeImage from '../../functions/resizeImage';
import checkImageExist from '../../functions/checkImageExist';

const convertRoute = express.Router();

convertRoute.get('/', async (req, res) => {
	const imageName = req.query.imageName as string;
	const width = parseInt(req.query.width as string);
	const height = parseInt(req.query.height as string);
	if (await checkImageExist(imageName, width, height)) {
		res.sendFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`, { root: '.' });
	} else {
		resizeImage(imageName, width, height, res);
	}
});

// convertRoute.get('/test', async (req, res) => {
// 	res.send('test');
// });

export default convertRoute;
