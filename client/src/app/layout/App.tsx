import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import CssBaseline from '@mui/material/CssBaseline';
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "../errors/NotFound";
import ServerError from "../errors/ServerError";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#9289a3' : '#221266'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path="catalog">
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<ContactPage />} />
          <Route path='register' element={<ContactPage />} />
          <Route path='server-error' element={<ServerError />} />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
