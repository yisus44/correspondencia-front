import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList.tsx";
import UserDetail from "./pages/UserDetail.tsx";
import UserForm from "./components/UserForm.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={UserList} />
          <Route path="/create" Component={UserForm} />
          <Route path="/:id" Component={UserDetail} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
