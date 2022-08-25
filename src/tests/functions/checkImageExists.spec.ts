import checkImageExists from '../../functions/checkImageExists';

describe('testing caching', () => {
	it('should be resolved', async () => {
		await expectAsync(checkImageExists('s')).toBeResolved();
		// await checkImageExist().toBeResolved();
	});
});
