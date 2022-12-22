import { chdir } from "process";
import { resolve } from "path";
import { getCurrentDirectory } from "../main/console.js";

export const cd = (path) => {
  try {
    if (path) {
      //console.log("path", path);
      chdir(resolve(path));
      getCurrentDirectory();
    } else {
      console.log("Invalid input");
    }
  } catch {
    console.log("Operation failed");
  }
};
