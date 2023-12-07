/** @format */

import { RouterProvider } from "react-router-dom";
import router from "../router";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <Helmet>
        <title>Pokedex</title>
        <link rel="icon" href="../Public/img/pngwing.com(2).png" />
      </Helmet>
    </>
  );
}

export default App;
