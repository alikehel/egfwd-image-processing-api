import checkImageExist from '../../functions/checkImageCached';

describe('testing caching', () => {
	it('should be resolved', async () => {
		await expectAsync(checkImageExist('s', 0, 0)).toBeResolved();
		// await checkImageExist().toBeResolved();
	});
});
