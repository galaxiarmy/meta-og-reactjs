import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { hydrate } from "react-dom";
import { render } from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import * as ReactDOM from 'react-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// const root = createRoot(rootElement);

// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <>
//       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//       <StrictMode>
//         <HelmetProvider context={helmetContext}>
//           <App />
//         </HelmetProvider>
//       </StrictMode>
//     </>,
//     rootElement
//   );
// } else {
// root.render(
//     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

//     <StrictMode>
//       <HelmetProvider context={helmetContext}>
//         <App />
//       </HelmetProvider>
//     </StrictMode>
// );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
