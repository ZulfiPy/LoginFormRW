import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import Missing from "./components/Missing";
import Admin from "./components/Admin";
import Editor from "./components/Editor";
import Lounge from "./components/Lounge";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Auth</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="linkpage" element={<LinkPage />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<Missing />} />

            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/lounge" element={<Lounge />} />

        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
