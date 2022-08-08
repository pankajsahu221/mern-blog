import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Topbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="register" element={user ? <Login /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="write" element={user ? <Write /> : <Register />} />
        <Route path="settings" element={user ? <Settings /> : <Home />} />
        <Route path="post/:postId" element={<Single />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
