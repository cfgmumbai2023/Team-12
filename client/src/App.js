// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Box } from '@mui/material';
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

// import { useTranslation } from 'react-i18next';

// const lngs = [
//   { code: "en", native: "English" },
//   { code: "vn", native: "Vietnamese" },
//   { code: "hi", native:"Hindi"},
// ];


function App() {

  // const { t, i18n } = useTranslation();

  // const handleTrans = (code) => {
  //   i18n.changeLanguage(code);
  // };

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
