import { chdir } from 'process';
import { homedir } from 'os';
import { startWork, endWork, getCurrentDirectory } from './main/console.js';

chdir(homedir());
startWork();
getCurrentDirectory();

process.on('SIGINT', () => {
  endWork();
});