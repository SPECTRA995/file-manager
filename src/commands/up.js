import { chdir } from "process";
import { resolve } from "path";
import { getCurrentDirectory } from "../main/console.js";

export const up = (path) => {
  try {
    if (path) {
      console.log("Invalid input");
    } else {
      chdir("..");
      getCurrentDirectory();
    }
  } catch {
    console.log("Operation failed");
  }
};
