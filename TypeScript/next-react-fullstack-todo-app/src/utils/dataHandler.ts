import path from "path";
import { promises as fs } from "fs";
// Handle all data file
//Find the absolute path of the json directory
const jsonDirectory = path.join(process.cwd(), `/src/data`);
export const readData = async (fileName: string) => {
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + `/${fileName}`,
    "utf8"
  );
  return fileContents;
};

export const writeData = async (fileName: string, fileContents: string) => {
  const fileWriteHs = await fs.writeFile(
    jsonDirectory + `/${fileName}`,
    fileContents
  );
};
