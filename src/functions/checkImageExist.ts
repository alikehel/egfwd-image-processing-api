import fs from 'fs/promises';

const checkImageExist = async (imageName: string, width: number, height: number) => {
	try {
		await fs.readFile(`./assets/thumbnails/${imageName}-${width}-${height}.jpg`);
		return true;
	} catch {
		return false;
	}
};

export default checkImageExist;
