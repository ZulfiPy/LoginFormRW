import Login from "./components/Login";
import Register from "./components/Register";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Auth</title>
      </Helmet>
      {/* Render Login or Register form down below */}
      <Register />
    </div>
  );
}

export default App;
