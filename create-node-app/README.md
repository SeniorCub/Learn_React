# Create-Seniorcub

A CLI tool to generate a custom Node.js app.

## Installation

To install, run the following command:

```bash
npm install -g create-seniorcub
```

## Usage

To create a new project, run the following command:

```bash
create-seniorcub
```

Follow the prompts to enter your project name, select your project type, and choose whether to include a database and authentication.

## Options

- `--help`: Display help information.
- `--version`: Display version information.

## Project Structure

The generated project will have the following structure:

```
<project-name>/
│
├── src/
│   └── index.js
│
├── public/      # (if Frontend or Fullstack)
│
├── config/      # (if database)
│
└── package.json
```

> Note: Replace `<project-name>` with the actual name of your project.

## Next Steps

After creating your project, follow these steps:

1. Navigate into the folder:
   ```bash
   cd <project-name>
   ```
2. Install npm (node modules):
   ```bash
   npm install
   ```
3. Start coding!

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License

---

This README file covers installation, usage, options, project structure, next steps, contributing, and license information. You can modify it to fit your specific needs.