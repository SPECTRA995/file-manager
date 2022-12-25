import { cd } from "../commands/cd.js";
import { copy } from "../commands/copy.js";
import { create } from "../commands/create.js";
import { del } from "../commands/delete.js";
import { up } from "../commands/up.js";
import { endWork } from "./console.js";

export const switchCmd = async (data) => {
  //console.log('data', data);
  const [cmd, path, newPath] = data.toString().trim().split(" ");
  //console.log('cmd', cmd, 'path', path);
  //console.log('newPath', newPath);

  switch (cmd) {
    case "up":
      up(path);
      break;
    case "cd":
      cd(path);
      break;
    case "cp":
      await copy(path, newPath);
      break;
    case "rm":
      await del(path);
      break;
    case "add":
      await create(path);
      break;
    case ".exit":
      if (path) {
        console.log("Invalid input");
      } else {
        endWork();
      }
      break;
    default:
      console.log("Invalid input");
  }
};
