Computer Science Visualizations, powered by [ReactJS](https://reactjs.org).

## Workflow
1. Clone this repository onto your machine with `git clone https://github.com/visual-cs/visual-cs.github.io.git`
2. Move into the repository and run `npm install` to set up all the dependencies
3. Run `npm install gh-pages --save-dev` to install `gh-pages`
3. Run `npm start` to develop and test your code as you're working on your local repository
4. Once done, commit your changes to the **source** branch with:
    - `git add .`
    - `git commit -m "some commit message"`
    - `git push origin source`
5. If required, pull the necessary changes via `git pull origin source`
6. Once done, run `npm run deploy` to build (compile) the ReactJS application and push it to the master branch.

Remember, **don't touch the master branch**. That's managed automagically by `gh-pages`.

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run deploy`
**Prerequisite:** install `gh-pages` module with  `npm install gh-pages --save-dev`.<br />
Deploys the app for production to the `master` branch.
