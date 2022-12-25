import { open } from "fs/promises";
import { resolve } from "path";
import { getCurrentDirectory } from "../main/console.js";

export const create = async (path) => {
  let newFile;
  try {
    if (path) {
      newFile = await open(resolve(process.cwd(), path), "w"); //'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
      getCurrentDirectory();
    } else {
      console.log("Invalid input");
    }
  } catch (err) {
    console.log("Operation failed");
  } finally {
    newFile?.close(); //Закрывает дескриптор файла после ожидания завершения любой ожидающей операции с дескриптором.
  }
};
