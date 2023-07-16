import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { AppRoutes } from "./AppRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      {2 + 2 !== 4 ? <AuthRoutes /> : <AppRoutes />}
    </BrowserRouter>
  );
}
