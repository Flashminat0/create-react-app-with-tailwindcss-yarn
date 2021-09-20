#!/usr/bin/env/node

const {execSync} = require('child_process');

const runCommand = (command) => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.log(`Failed to run the command ${command}`, e);
        return false;
    }
    return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Flashminat0/create-react-app-with-tailwindcss-yarn.git ${repoName}`
const installCommand = `cd ${repoName} && yarn add`

console.log(`Cloning the repo with name ${repoName}`);
const gitChekout =runCommand(gitCheckoutCommand);
if (!gitChekout) process.exit(-1);
console.log(`Installing Dependencies for your ${repoName} project `);

const installedDeps = runCommand(installCommand);
if (!installedDeps) process.exit(-1);

console.log("Congratulations You have successfully Added Tailwind Css to your react project !");
runCommand(`cd ${repoName}`);
console.log("type npm start to start the Server !");




