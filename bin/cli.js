#!/usr/bin/env node

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

let repoName = process.argv[2];
let folder = `cd ${repoName} &&`;

if (repoName === '.') {
    folder = '';
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/Flashminat0/create-react-app-with-tailwindcss-yarn.git ${repoName}`
const installCommand = `${folder} yarn`

console.log(`Cloning the repo with name ${repoName}`);
const gitCheckout = runCommand(gitCheckoutCommand);
if (!gitCheckout) process.exit(-1);
console.log(`Installing Dependencies for your ${repoName} project `);

const installedDeps = runCommand(installCommand);
if (!installedDeps) process.exit(-1);

console.log("Congratulations You have successfully Added Tailwind Css to your react project !");
console.log("type npm start to start the Server !");




