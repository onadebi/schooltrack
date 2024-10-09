import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRouter from "./routes/AppRouter";
import MetaTag from "./components/MetaTag";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Loader />
      <HelmetProvider>
        <MetaTag title="" />
        <RouterProvider router={AppRouter} />
      </HelmetProvider>
    </>
  );
}

export default App;
