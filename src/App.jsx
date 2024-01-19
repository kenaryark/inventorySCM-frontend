import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
} from "react-router-dom";
import { AuthLayout } from "./components/AuthLayout";
import { HomeLayout } from "./components/HomeLayout";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Login } from "./components/pages/Login";
import { Dashboard } from "./components/pages/Dashboard";
import { Data } from "./components/pages/Data";
import "./App.css";
import ErrorPage from "./components/pages/Error";

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
      errorElement={<ErrorPage />}>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Login />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Data" element={<Data />} />
      </Route>
    </Route>
  )
);
