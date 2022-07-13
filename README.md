# UP42 storefront app
Its a SPA Frontend using ReactJS, Context-API and Nextjs for SSR.


## How to use

### Step 1: NodeJS and npm
Download and install __[Node.js v16.13.1](https://nodejs.org/dist/v16.13.1/)__.(preferabally latest stable version)

### Step 2: Get dependency packages

    npm install

### Step 3: Start project
To run the development server:

```bash
npm run dev
# or
yarn dev

```
To run the production server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can take a look at `pages/index.tsx` for initial page. The page auto-updates as you edit the file while running the server.

[API routes] that fetches the Blocks can be accessed on [http://localhost:3000/api/blocks](http://localhost:3000/api/blockss). This endpoint can be edited in `pages/api/blocks.ts`.

The fetched api details are stored in `context/BlockContext.tsx` and can be accessed using `useBlockContext`

### Testing
Run the following command: `npm run test`, this also provides the coverage of the test files.

Test use Facebook's JEST framework for testing: http://facebook.github.io/jest/
and Teact testing library: https://testing-library.com/docs/react-testing-library/intro/

To add or remove the files/folders from test coverage, you can edit the `collectCoverageFrom` property inside `jest.config.js`

```bash
const customJestConfig = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!.next/**',
    '!*.config.js',
    '!coverage/**',
    '!interfaces/**',
    '!mocks/**',
    '!pages/**'
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}
```

## Code conventions

### Modules

* All modules are organized by [atomic design patterns](http://patternlab.io):
  * Atoms
  * Molecules
  * Pages

* Typescript Types are mentioned under `interfaces` folder (Example: IBlock, ICart) 