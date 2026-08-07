import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Movies from "./views/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Movies /> }
    ]
  }
]);

export default router;