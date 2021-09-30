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

