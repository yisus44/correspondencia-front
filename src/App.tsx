import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList.tsx";
import UserDetail from "./pages/UserDetail.tsx";
import UserForm from "./components/UserForm.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={UserList} />
        <Route path="/create" Component={UserForm} />
        <Route path="/:id" Component={UserDetail} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
