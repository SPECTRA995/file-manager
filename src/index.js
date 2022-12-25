import { startWork, endWork, getCurrentDirectory } from "./main/console.js";
import { chdir } from "process";
import { homedir } from "os";
import { switchCmd } from "./main/switchCmd.js";

chdir(homedir());
startWork();
getCurrentDirectory();

// const homedir = homedir();
// console.log('homedir', homedir);

// const chdir = chdir(homedir());
// console.log('chdir', chdir);

process.stdin.on("data", switchCmd);

process.on("SIGINT", () => {
  endWork();
});
