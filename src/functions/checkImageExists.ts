import fs from 'fs/promises';

const checkImageExists = async (imageName: string) => {
	try {
		await fs.readFile(`./assets/images/${imageName}.jpg`);
		return true;
	} catch {
		return false;
	}
};

export default checkImageExists;
