// import { Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard/Dashboard'
// import Preferences from './components/Preferences/Preferences'
// import { ProtectedRoute } from './components/Auth/ProtectedRoute';
// import { ChakraProvider } from "@chakra-ui/react";
// import { PrimeReactProvider } from "primereact/api";
// import { BrowserRouter } from "react-router-dom";
// import { AuthWrapper } from "./auth/AuthWrapper";
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
import { Account } from "./components/pages/Account";
import ErrorPage from "./components/pages/Error";

// function App() {
//   return (
//     // <Routes>
//     //   <Route path="/" element={<Dashboard />} />
//     //   <Route path="/login" element={
//     //   <ProtectedRoute>
//     //     <Preferences />
//     //   </ProtectedRoute>
//     //   } />
//     // </Routes>
//     // <div className="App">
//     <PrimeReactProvider>
//       <ChakraProvider>
//         <BrowserRouter>
//           <AuthWrapper />
//         </BrowserRouter>
//       </ChakraProvider>
//     </PrimeReactProvider>
//     // </div>
//   );
// }

// export default App;

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
        <Route path="tes" element={<Account />} />
      </Route>
    </Route>
  )
);
