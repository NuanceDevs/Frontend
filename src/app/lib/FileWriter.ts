import { promises as fsPromises } from "fs";
import { join } from "path";
import { log4TSProvider } from "./Logger";

export async function asyncWriteFile(filename: string, data: any) {
  const logger = log4TSProvider.getLogger("FileWriter");
  try {
    await fsPromises.writeFile(join(__dirname, filename), data, {
      flag: "w",
    });

    const contents = await fsPromises.readFile(
      join(__dirname, filename),
      "utf-8"
    );
  } catch (error) {
    logger.error(`Error writing file ${filename}: ${error}`);
    throw error;
  }
}
