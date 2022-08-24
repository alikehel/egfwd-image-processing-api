import express from 'express';
import convertRoute from './routes/convert/index';

// const routes = express.Router();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Home');
});

app.use('/convert', convertRoute);

// app.get('/convert', async (req, res) => {
// const imageName = req.query.imageName as string;
// const width = parseInt(req.query.width as string);
// const height = parseInt(req.query.height as string);
// if (await checkImageExist(imageName, width, height)) {
// 	res.sendFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`, { root: '.' });
// } else {
// 	resizeImage(imageName, width, height, res);
// }
// });

app.listen(port, () => {
	console.log(`Server is running at port http://localhost:${port}`);
});
