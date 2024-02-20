import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import ROLES_LIST from "./config/roles_list";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import Missing from "./components/Missing";
import Admin from "./components/Admin";
import Editor from "./components/Editor";
import User from "./components/User";
import Customers from "./components/Customers";
import Lounge from "./components/Lounge";
import RequireAuth from "./components/RequireAuth";

const ROLES = {
  'User': ROLES_LIST.User,
  'Editor': ROLES_LIST.Editor,
  'Admin': ROLES_LIST.Admin
};

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>RW-Rent</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Missing />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor, ROLES.User]} />} >
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor, ROLES.User]} />}>
            <Route path="customers" element={<Customers />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />} >
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />} >
            <Route path="editor" element={<Editor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor, ROLES.User]} />}>
            <Route path="user" element={<User />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Editor, ROLES.Admin]} />} >
            <Route path="lounge" element={<Lounge />} />
          </Route>

        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
