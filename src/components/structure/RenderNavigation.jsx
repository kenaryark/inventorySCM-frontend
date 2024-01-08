// import { Link, Route, Routes, useLocation } from "react-router-dom";
// import { AuthData } from "../../auth/AuthWrapper";
// import { nav } from "./navigation";
// import { Box, Flex } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// export const RenderRoutes = () => {
//   const { user } = AuthData();
//   return (
//     <Routes>
//       {nav.map((r, i) => {
//         if (r.isPrivate && user.isAuthenticated) {
//           return <Route key={i} path={r.path} element={r.element} />;
//         } else if (!r.isPrivate) {
//           return <Route key={i} path={r.path} element={r.element} />;
//         } else return false;
//       })}
//     </Routes>
//   );
// };

// export const RenderMenu = () => {
//   const { user, logout } = AuthData();
//   const [isUserAuthenticated, setUserAuthenticated] = useState(
//     user.isAuthenticated
//   );

//   useEffect(() => {
//     setUserAuthenticated(user.isAuthenticated);
//   }, [user.isAuthenticated]);

//   const location = useLocation();

//   const isRootRoute = location.pathname === "/";

//   const MenuItem = ({ r }) => {
//     return (
//       <Box
//         bg="#16E2F5"
//         borderRadius="7px"
//         width="100px"
//         display="flex"
//         justifyContent="center">
//         <Link to={r.path} style={{ color: "white", fontWeight: "bold" }}>
//           {r.name}
//         </Link>
//       </Box>
//     );
//   };

//   const centerStyles = {
//     position: "fixed",
//     top: "25px",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//   };
//   const boxWidth = "400px";
//   const boxHeight = "42px";
//   const zIndexValue = 999;
//   return (
//     !isRootRoute &&
//     isUserAuthenticated && (
//       <Box
//         bg="#F5F5F5"
//         style={{
//           ...centerStyles,
//           width: boxWidth,
//           height: boxHeight,
//           zIndex: zIndexValue,
//         }}
//         pt="10px"
//         borderRadius="16px"
//         backgroundSize="cover"
//         backdropFilter="blur(20px)">
//         <Flex justifyContent="center" gap="2">
//           {nav.map((r, i) => {
//             if (!r.isPrivate && r.isMenu) {
//               return <MenuItem key={i} r={r} />;
//             } else if (user.isAuthenticated && r.isMenu) {
//               return <MenuItem key={i} r={r} />;
//             } else return false;
//           })}

//           {user.isAuthenticated ? (
//             <Box
//               bg="#16E2F5"
//               borderRadius="7px"
//               width="100px"
//               display="flex"
//               justifyContent="center">
//               <Link
//                 to={"/"}
//                 onClick={logout}
//                 style={{ color: "white", fontWeight: "bold" }}>
//                 Log out
//               </Link>
//             </Box>
//           ) : (
//             <Box
//               bg="#16E2F5"
//               borderRadius="7px"
//               width="100px"
//               display="flex"
//               justifyContent="center">
//               <Link to={"/"} style={{ color: "white", fontWeight: "bold" }}>
//                 Log in
//               </Link>
//             </Box>
//           )}
//         </Flex>
//       </Box>
//     )
//   );
// };
