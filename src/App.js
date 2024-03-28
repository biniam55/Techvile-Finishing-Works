import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopMain from "./pages/DesktopMain";
import Gallery from "./pages/Gallery";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import MobileHome from "./pages/MobileHome";
import MobileGallery from "./pages/MobileGallery";
import Dashboard1 from "./pages/Dashboard1";
import MobileSignUp from "./pages/MobileSignUp";
import MobileSignIn from "./pages/MobileSignIn";
import Dashboard from "./pages/Dashboard2";

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
      case "/gallery":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-home":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-gallery":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard1":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard2":
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
      <Route path="/" element={<DesktopMain />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mobile-home" element={<MobileHome />} />
      <Route path="/mobile-gallery" element={<MobileGallery />} />
      <Route path="/dashboard1" element={<Dashboard1 />} />
      <Route path="/mobile-sign-up" element={<MobileSignUp />} />
      <Route path="/mobile-sign-in" element={<MobileSignIn />} />
      <Route path="/dashboard2" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
