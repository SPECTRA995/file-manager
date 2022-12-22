import { up } from "../commands/up.js";

export const switchCmd = async (data) => {
  //console.log('data', data);
  const [cmd, path, newPath] = data.toString().trim().split(" ");
  //console.log('cmd', cmd, 'path', path);
  //console.log('newPath', newPath);

  switch (cmd) {
    case "up":
      up(path);
      break;
    default:
      console.log("Invalid input");
  }
};