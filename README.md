# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Things must be followed while development

1.Make sure  every page, component folder and file name  should start with PacalCase and camelCase for the variables inside components

2.What ever the imports from the packages will be on the top of your file, next followed by nearest file and last CSS

example:
// packages
import React from 'react';
import {Routes,Route} from "react-router-dom"  

// closet file
import HomePage from './routes/HomePage/HomePage'; 

// file that is outside the folder
import somecomponent from '../../somecomponent/somecomponent'; 

//css
import './App.css';     



3. Always remove the dead code(variables that you are not using and imports that you are not using) before sending merge.


4. Frequently take the pull from the develop branch so that you push the latest code while doing merge.

5. If you have merge conflicts resolve them carefully.

6. **Most important** thing naming a variable or function or file, make sure your giving a meaning full name(what it serves) avoid giving single variables x,y,e.

7. while giving CSS in CSS files names make sure you are using hyphen "-" between words, don't give short words like card, header elaborate them team-section-card , team-section-header , otherwise it will overlap with others and you will not get your required output.

8.Dont repeat your code, if something is using twice optimize it.

9. Avoid X/Y : for suppose you are solving X problem. And you are trying to solve it with Y path, Where Y path is not the solution for X. So whenever you seeking for help from your team mates. First tell the X problem and tell the things or ways  you are tried to do X (example: Y). so no one time will be wasted.

10. if you see any optimization can be done in others code please inform to the respective person.