#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

const program = new Command();
program.version('2.0.0').description('Generate a custom Node.js app');

program
  .action(async () => {
    const answers = await promptQuestions();
    createProjectStructure(answers);
    displayNextSteps(answers.projectName);
  });

async function promptQuestions() {
  const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
    },
    {
      type: 'list',
      name: 'projectType',
      message: 'Select your project type:',
      choices: ['Backend', 'Frontend', 'Fullstack'],
    },
    {
      type: 'confirm',
      name: 'useDatabase',
      message: 'Do you want to include a database?',
    },
    {
      type: 'confirm',
      name: 'useAuthentication',
      message: 'Do you want to include authentication?',
    },
  ];

  return await inquirer.prompt(questions);
}

function createProjectStructure(answers) {
  const { projectName, projectType, useDatabase, useAuthentication } = answers;
  const rootDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(rootDir)) {
    console.log(`Project ${projectName} already exists!`);
    return;
  }

  // Create directories
  fs.mkdirSync(rootDir);
  fs.mkdirSync(path.join(rootDir, 'src'));

  if (projectType === 'Fullstack' || projectType === 'Frontend') {
    fs.mkdirSync(path.join(rootDir, 'public'));
  }

  if (useDatabase) {
    fs.mkdirSync(path.join(rootDir, 'config'));
  }

  // Create files
  fs.writeFileSync(
    path.join(rootDir, 'src', 'index.js'),
    `console.log('Hello from ${projectName}!')`
  );

  const packageJson = {
    name: projectName,
    version: '1.0.0',
    main: 'src/index.js',
    scripts: {
      start: 'node src/index.js',
    },
  };

  if (useDatabase) {
    packageJson.dependencies = {
      mongodb: '^4.10.0',
    };
  }

  if (useAuthentication) {
    packageJson.dependencies = {
      ...packageJson.dependencies,
      passport: '^0.6.0',
    };
  }

  fs.writeFileSync(
    path.join(rootDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  console.log(`Project ${projectName} created successfully.`);
}

function displayNextSteps(projectName) {
  console.log(`\nNext steps:`);
  console.log(`1. Navigate into the folder: cd ${projectName}`);
  console.log('2. Install npm (node modules): npm install');
  console.log('3. Start coding!');
}

program.parse(process.argv);