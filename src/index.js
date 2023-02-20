import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Article from "./pages/article/Article";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />}/>
          <Route path="blogs/:article_name" element={<Article />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));