import express from 'express';
import convertRoute from './routes/convert/index';
import cors from 'cors';

// const routes = express.Router();
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
	res.send('Home');
});

app.use('/convert', convertRoute);

app.listen(port, () => {
	console.log(`Server is running at port http://localhost:${port}`);
});

export default app;
