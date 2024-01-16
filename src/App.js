import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog-detail";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
