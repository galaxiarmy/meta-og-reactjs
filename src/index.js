import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { hydrate } from 'react-dom';
// import { render } from 'react-dom';

// without react-snap
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// with react-snap
// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <>
//       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//       <App />
//     </>,
//     rootElement
//   );
// } else {
//   render(
//     <>
//       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//       <App />
//     </>,
//     rootElement
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
