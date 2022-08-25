import resizeImage from '../../functions/resizeImage';
import fs from 'fs/promises';
describe('test resizing images', () => {
	it('resizing image should be resolved', async () => {
		await expectAsync(resizeImage('image1', 100, 100)).toBeResolved();
	});

	it('resizing image should work', async () => {
		await fs.rm('./assets/thumbnails/image1-100-100.jpg');
		await resizeImage('image1', 100, 100);
		// const image = await fs.open('../../../assets/thumbnails/image1-100-100.jpg');
		await expectAsync(fs.open('./assets/thumbnails/image1-100-100.jpg')).toBeResolved();
	});
});
