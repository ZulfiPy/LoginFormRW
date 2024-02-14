import Login from "./components/Login";
import Register from "./components/Register";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Auth</title>
        </Helmet>
        {/* Render Login or Register form down below */}
        <Register />
      </div>
    </HelmetProvider>
  );
}

export default App;
