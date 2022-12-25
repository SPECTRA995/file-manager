const user = process.argv[2];
let userName;

if (user && user.startsWith("--username=")) {
  userName = user.replace("--username=", "");
} else {
  userName = "Noname";
}

export const startWork = () => {
  console.log(`Welcome to the File Manager, ${userName}!`);
};

export const endWork = () => {
  console.log(` Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
};

export const getCurrentDirectory = () => {
  console.log(`You are currently in ${process.cwd()}`);
};
