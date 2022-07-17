import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Project from "./pages/project";
import Education from "./pages/education";
import Experience from "./pages/experience";
import NoPage from "./pages/nopage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="project" element={<Project />} />
          <Route path="education" element={<Education />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);