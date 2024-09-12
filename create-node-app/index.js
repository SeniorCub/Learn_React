#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();
program.version('1.0.3').description('Generate a custom Node.js app');

program
  .argument('<project-name>', 'Name of your project')
  .action((projectName) => {
    createProjectStructure(projectName);
  });

  function createProjectStructure(projectName) {
     const rootDir = path.join(process.cwd(), projectName);
   
     if (fs.existsSync(rootDir)) {
       console.log(`Project ${projectName} already exists!`);
       return;
     }
   
     // Create directories
     fs.mkdirSync(rootDir);
     fs.mkdirSync(path.join(rootDir, 'src'));
     fs.mkdirSync(path.join(rootDir, 'public'));
     fs.mkdirSync(path.join(rootDir, 'config'));
   
     // Create files
     fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), `console.log('Hello from ${projectName}!')`);
     fs.writeFileSync(path.join(rootDir, 'package.json'), JSON.stringify({
       name: projectName,
       version: '1.0.0',
       main: 'src/index.js',
       scripts: {
         start: "node src/index.js"
       }
     }, null, 2));
   
     console.log(`Project ${projectName} created successfully.`);
   }
   

program.parse(process.argv);