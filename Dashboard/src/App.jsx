import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import DeathTable from "./components/dashboard/areaTable/DeathTable";
import BirthAllUserInfo from "./UserInfo/BirthAllUserInfo";
import ViewOSRFault from "./UserInfo/ViewOSRFault";
import ViewDocFault from "./UserInfo/ViewDocFault";
import MedicalBody from "./Medical/MedicalBody";
import HospitaloneData from "./Medical/HospitaloneData";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/death" element={<DeathTable />} />
            <Route path="/view/birth/details" element={<BirthAllUserInfo />} />
            <Route path="/view/osr/fault" element={<ViewOSRFault />} />
            <Route path="/view/doc/fault" element={<ViewDocFault />} />
            <Route path="/medical" element={<MedicalBody />} />
            <Route path="/hospitaldata" element={<HospitaloneData />} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
