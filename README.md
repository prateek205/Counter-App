# 🔄️ Counter_Application_Project
This is Counter web project in which we can Increment, Decrement and Reset the count by using `useState` Methodology as this is full responsive for small devices also and in this we build by HTML, CSS and Js Technology.

## 💻 Technology Used
- HTML.
- CSS.
- JavaScript.
- React.Js

## 🚀 Features
- Easy to use.
- Fully Responsive for small device.
- clean user interface.

## 📸 ScreenShot
![Demo_ ScreenShot](https://github.com/prateek205/Counter-App/blob/96f89e56d14589215b9786908d5807d43cd97733/public/asset/image/counter_project.png)

## 📽️ Demo
Live Demo: https://counter-app-nine-chi-25.vercel.app/

## 📦 Deployment
- Vercel
- Netlify
- GitHub page

## 📂 Folder Structure
```
├── Counter Project
├── public/
│   ├── asset/
│   │   ├── image
│   │   └── video
│   └── index.html
├── src/
│   ├── Components
│   ├── App.js
│   └── Index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
## Example code(React.js)
#### 1.Index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
#### 2.App.js
```
import React from 'react'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
```
#### 3.Home.js
```
import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // console.log("increment");

    count < 20 ? setCount(count + 1) : alert("You have Reach the Count");

    // if(count < 20){
    //     setCount(count + 1);
    // }else{
    //     alert("You have Reach the Count")
    // }
  };
  const decrement = () => {
    // console.log("decrement");

    count > 0 ? setCount(count - 1) : alert("You Have Exceed the Limit");

    // if(count > 0){
    //     setCount(count - 1);
    // }else{
    //     alert("You Have Exceed the Limit")
    // }
  };
  const reset = () => {
    // console.log("reset");
    setCount(0);
  };

  return (
    <div className="container home">
      <h1 className="count">Count : {count}</h1>
      <div className="btn-group">
        <button
          type="button"
          className="button"
          onClick={increment}
        >
          Increment
        </button>
        <button
          type="button"
          className="button"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          type="button"
          className="button"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Home;

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
