import { createReadStream, createWriteStream } from "fs";
import { resolve, parse } from "path";
import { pipeline } from "stream/promises";
import { getCurrentDirectory } from "../main/console.js";

export const copy = async (path, newPath) => {
  if (path && newPath) {
    const srcFiles = resolve(path);
    const { base } = parse(srcFiles);
    const srcFilesCopy = resolve(newPath, base);
    try {
      const readStream = createReadStream(srcFiles);
      const writeStream = createWriteStream(srcFilesCopy);
      await pipeline(readStream, writeStream);
      getCurrentDirectory();
    } catch (err) {
      console.log("Operation failed");
    }
  } else {
    console.log("Invalid input");
  }
};