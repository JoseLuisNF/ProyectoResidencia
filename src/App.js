import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Agradecimientos from "./pages/Agradecimientos";
import Informacion from "./pages/Informacion";
import Preguntas from "./pages/Preguntas";
import Sugerencias from "./pages/Sugerencias";
import Sugerencias1 from "./pages/Sugerencias1";
import Group from "./pages/Group";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/agradecimientos":
        title = "";
        metaDescription = "";
        break;
      case "/informacion":
        title = "";
        metaDescription = "";
        break;
      case "/preguntas":
        title = "";
        metaDescription = "";
        break;
      case "/sugerencias":
        title = "";
        metaDescription = "";
        break;
      case "/sugerencias1":
        title = "";
        metaDescription = "";
        break;
      case "/group-3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/agradecimientos" element={<Agradecimientos />} />
      <Route path="/informacion" element={<Informacion />} />
      <Route path="/preguntas" element={<Preguntas />} />
      <Route path="/sugerencias" element={<Sugerencias />} />
      <Route path="/sugerencias1" element={<Sugerencias1 />} />
      <Route path="/group-3" element={<Group />} />
    </Routes>
  );
}
export default App;
