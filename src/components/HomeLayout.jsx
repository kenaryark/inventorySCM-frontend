import { Navigate, useOutlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Menubar } from "primereact/menubar";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/Dashboard" replace />;
  }

  const navigate = useNavigate();
  const items = [
    {
      label: "Login",
      command: () => {
        navigate("/");
      },
    },
  ];

  return (
    <div>
      {/* <Menubar model={items} /> */}
      {outlet}
    </div>
  );
};
