import React from "react";
import {
  Navigate,
  useOutlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Flex } from "@chakra-ui/react";
import { PrimeIcons } from "primereact/api";
import { TabMenu } from "primereact/tabmenu";

export const ProtectedLayout = () => {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();
  const items = [
    {
      label: "Dashboard",
      command: () => {
        navigate("Dashboard");
      },
      icon: PrimeIcons.HOME,
    },
    {
      label: "Data",
      command: () => {
        navigate("Data");
      },
      icon: PrimeIcons.TABLE,
    },
    {
      label: "Logout",
      command: logout,
      icon: PrimeIcons.SIGN_OUT,
    },
  ];

  const pathnameIndex = {
    "/Dashboard": 0,
    "/Data": 1,
  };

  const activeIndex = pathnameIndex[pathname] || 0;

  return (
    <Flex direction="column" bg="#EBF4FA">
      <Flex justifyContent="center" bg="#EBF4FA">
        <TabMenu model={items} activeIndex={activeIndex} />
      </Flex>
      {outlet}
    </Flex>
  );
};
