Computer Science Visualizations, powered by [ReactJS](https://reactjs.org).

## Workflow
1. Clone this repository onto your machine with `git clone https://github.com/visual-cs/visual-cs.github.io.git`
2. Move into the repository and run `npm install` to set up all the dependencies
3. Run `npm start` to develop and test your code as you're working on your local repository
4. Once done, commit your changes to the **source** branch with:
    - `git add .`
    - `git commit -m "some commit message"`
    - `git push origin source`
5. If required, pull the necessary changes via `git pull origin source`


## Live Version
To update the live version of the website on the server, follow these steps:  
1. Open an ssh connection to the server via `ssh mark`. The configuration is granted to organization contributors only
2. Move into the repository folder via `cd visual-cs`
3. Run `npm run deploy` to launch the commands that will pull the changes from github, move them to the required folders and restart nginx.
