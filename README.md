# 0.42 -1.12
https://drive.google.com/file/d/1xYb6IXAorqCsQRxi1oQASBdQMH5_9vPK/view


# Site with User Settings

Create a site that allows the user to change settings that alter how the site looks and functions.

## Instructions

- create a blank site using `create-react-app` or your own customized version of it, e.g. [blankcra](https://github.com/edwardtanguay/blankcra)
- using React Router, create two pages: **Home** and **Config**
- on the `App.js` page, create a context provider that maintains a state variable 'mode' with the default setting on 'normal'
- on the **Config** page, make two buttons with the following functionality:
  - `Normal Mode` - sets the useContext variable `mode` to `normal`
  - `Expert Mode` - sets the useContext variable `mode` to `expert`
- on the `App.js` page, display one of the following depending on the value of `mode`:
  - *This site is currently in **normal** mode.*
  - *This site is currently in **expert** mode.*

## Challenge #1 🥇

- create a third page called **Login**
- create a new context state variable called `login`
- on the Login page, create a form with Login and Password field which allows a user named `alice` and `finia` to log in.
- if they type in the right password, set the `login` variable and display their name at the beginning of every page
- on the login page when they are logged in, display only a **Logout** button which logs them out and displays the form again

## Challenge #2 🥇

- replace two useState variables `mode` and `login` with useReducer
- when Alice logs in, automatically change the mode to **normal**
- when Finia logs in, automatically change the mode to **expert**

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
