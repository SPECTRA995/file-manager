import { rm } from "fs/promises";
import { resolve } from "path";
import { getCurrentDirectory } from "../main/console.js";

export const del = async (path) => {
  if (path) {
    try {
      await rm(resolve(path));
      getCurrentDirectory();
    } catch (err) {
      console.log("Operation failed");
    }
  } else {
    console.log("Invalid input");
  }
};