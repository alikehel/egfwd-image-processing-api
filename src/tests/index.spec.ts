import app from '../index';
import supertest from 'supertest';

supertest(app);

const request = supertest(app);
describe('Test endpoint responses', () => {
	it('gets the root endpoint', async () => {
		const response = await request.get('/');
		expect(response.status).toBe(200);
	});
});
