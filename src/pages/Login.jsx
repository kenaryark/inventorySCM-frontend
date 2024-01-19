import { useReducer, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthData } from "../../auth/AuthWrapper";
// import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Image } from "primereact/image";

import {
  FormControl,
  FormLabel,
  Heading,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Stack,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { userName: "", password: "" }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = async () => {
    try {
      await login(formData.userName, formData.password);
      navigate("/Dashboard");
    } catch (error) {
      setErrorMessage(error);
      console.log("gagal login");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      doLogin();
    }
  };

  return (
    <Flex position="relative" bg="#EBF4FA" h="100vh">
      <Flex
        h={{
          sm: "100vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        }}
        mx="auto"
        // pt={{ sm: "50px", md: "0px" }}
        // px={{ lg: "30px", xl: "0px" }}
        // ps={{ xl: "70px" }}
        justifyContent="start"
        direction="column">
        {/* <Flex
          // maxW={{ base: "100%", md: "max-content" }}
          w="500px"
          mx={{ base: "auto", lg: "0px" }}
          me="auto"
          h="100%"
          alignItems="center"
          justifyContent="center"
          mb={{ base: "30px", md: "60px" }}
          px={{ base: "25px", md: "0px" }}
          mt={{ base: "40px", md: "14vh" }}
          flexDirection="column"
          bg="#E5E4E2"
          borderRadius="20px">
          <Flex
            position="relative"
            h="max-content"
            justifyContent="center"
            alignItems="center"
            direction="column">
            <Image src="/Wijaya_Karya.svg" />
            <Heading color="black" fontSize="36px">
              Inventory SCM
            </Heading>
          </Flex>
          <Flex direction="column">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <InputText
                value={formData.userName}
                onChange={(e) => setFormData({ userName: e.target.value })}
                style={{
                  borderRadius: "5px",
                  background: "white",
                }}
              />
              <FormLabel>Password</FormLabel>
              <InputText
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ password: e.target.value })}
                style={{
                  borderRadius: "5px",
                  background: "white",
                }}
              />
            </FormControl>
            <Button
              onClick={doLogin}
              label="Login"
              className="p-button w-full"
              style={{ marginTop: "10px", background: "#40E0D0" }}
            />
          </Flex>
        </Flex>
      </Flex> */}
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Image src="/Wijaya_Karya.svg" />
            <Heading fontSize={"4xl"}>Inventory SCM</Heading>
          </Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="user">
                <FormLabel>User</FormLabel>
                <Input
                  type="user"
                  value={formData.userName}
                  onChange={(e) => setFormData({ userName: e.target.value })}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ password: e.target.value })}
                  onKeyPress={handleKeyPress}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  onClick={doLogin}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};
