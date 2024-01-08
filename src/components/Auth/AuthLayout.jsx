// import { ProgressSpinner } from "primereact/progressspinner";
// import { Toast } from "primereact/toast";
// import { Suspense } from "react";
// import { useLoaderData, useOutlet, Await } from "react-router-dom";

// export const AuthLayout = () => {
//   const outlet = useOutlet();

//   const { userPromise } = useLoaderData();

//   return (
//     <Suspense fallback={<ProgressSpinner />}>
//       <Await
//         resolve={userPromise}
//         errorElement={<Toast severity="error">Something went wrong!</Toast>}
//         children={(user) => (
//           <AuthProvider userData={user}>{outlet}</AuthProvider>
//         )}
//       />
//     </Suspense>
//   );
// };
