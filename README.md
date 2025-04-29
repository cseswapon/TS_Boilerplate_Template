

```markdown
# MERN Stack TypeScript Project

This is a MERN stack project using TypeScript. Follow the instructions below to set up, build, and run the project.

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- TypeScript (Global Installation)
  
To install TypeScript globally, use the following command:

```sh
npm i -g typescript
```

### MongoDB Setup
Ensure MongoDB is running and enabled. If MongoDB is already installed, run the following commands:

1. **Start MongoDB service**  
   ```sh
   sudo systemctl start mongod
   ```

2. **Enable MongoDB to start on boot**  
   ```sh
   sudo systemctl enable mongod
   ```

3. **Check MongoDB service status**  
   ```sh
   sudo systemctl status mongod
   ```

## Installation

1. Clone the repository or initialize a new Node.js project:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   npm install
   ```

2. **Create TypeScript Configuration File**
   You can create a `tsconfig.json` file by running:

   ```sh
   npx tsc --init
   ```

## Running the Project

### Development Mode
To run the project in development mode with live reloading:

```sh
npm run start:dev
```

This will start the project using `ts-node-dev`, and it will watch for file changes, restarting the server automatically.

### Production Mode
To build the project and run it in production mode:

1. First, build the TypeScript project:

   ```sh
   npx tsc
   ```

2. Then, run the production build:

   ```sh
   npm run start:prod
   ```

This will run the compiled JavaScript code from the `dist` directory.

## Project Structure

- **src**: Contains all TypeScript source files.
- **dist**: Contains the compiled JavaScript files after running `tsc`.

## Available Scripts

- **start:prod**: Runs the project in production mode.
  ```sh
  npm run start:prod
  ```

- **start:dev**: Runs the project in development mode with auto-reloading.
  ```sh
  npm run start:dev
  ```

- **lint**: Runs ESLint to check the code for errors.
  ```sh
  npm run lint
  ```

- **lint:fix**: Runs ESLint and automatically fixes any fixable issues.
  ```sh
  npm run lint:fix
  ```

- **test**: Placeholder for running tests (currently not set up).
  ```sh
  npm run test
  ```

## License
This project is licensed under the ISC License.

```