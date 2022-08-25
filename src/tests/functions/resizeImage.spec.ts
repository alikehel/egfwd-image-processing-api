import resizeImage from '../../functions/resizeImage';

describe('test resizing images', () => {
	it('should be resolved', async () => {
		await expectAsync(resizeImage('image1', 100, 100)).toBeResolved();
	});
});
