// import { createContext, useContext, useState, useEffect, useMemo } from "react";
// // import { RenderHeader } from "../components/structure/Header";
// import {
//   RenderMenu,
//   RenderRoutes,
// } from "../components/structure/RenderNavigation";

// const AuthContext = createContext();
// export const AuthData = () => useContext(AuthContext);

// export const AuthWrapper = () => {
//   const [user, setUser] = useState(() => {
//     // Coba mengambil data pengguna dari penyimpanan lokal saat komponen dimuat
//     const storedUser = localStorage.getItem("user");
//     return storedUser
//       ? JSON.parse(storedUser)
//       : { name: "", isAuthenticated: false };
//   });

//   const [akun, setAkun] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/akun")
//       .then((response) => response.json())
//       .then((data) => {
//         setAkun(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
//   let username = "";
//   let pass = "";
//   if (akun.length > 0) {
//     username = akun[0].id; // Access the 'id' property from the first element in the array
//     pass = akun[0].password; // Access the 'password' property from the first element in the array
//   }
//   const login = (userName, password) => {
//     // Make a call to the authentication API to check the username

//     return new Promise((resolve, reject) => {
//       if (userName === username && password === pass) {
//         const loggedInUser = { name: userName, isAuthenticated: true };
//         setUser(loggedInUser);

//         // Simpan informasi pengguna ke penyimpanan lokal
//         localStorage.setItem("user", JSON.stringify(loggedInUser));

//         resolve("success");
//       } else {
//         reject("Incorrect password");
//       }
//     });
//   };
//   const logout = () => {
//     setUser({ ...user, isAuthenticated: false });
//   };

//   useEffect(() => {
//     // Mendaftarkan event listener untuk menghandle perubahan tab/browser yang menyebabkan logout
//     const handleStorageChange = (e) => {
//       if (e.key === "user" && !e.newValue) {
//         logout();
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);
//   const value = useMemo(
//     () => ({
//       user,
//       login,
//       logout,
//     }),
//     [user]
//   );
//   return (
//     <AuthContext.Provider value={value}>
//       <>
//         {/* <RenderHeader /> */}
//         <RenderMenu />
//         <RenderRoutes />
//       </>
//     </AuthContext.Provider>
//   );
// };
