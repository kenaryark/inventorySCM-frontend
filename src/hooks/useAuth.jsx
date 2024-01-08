import {
  createContext,
  useContext,
  useMemo,
  // useEffect,
  // useState,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { Toast } from "primereact/toast";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const navigate = useNavigate();

  //   const login = async (data) => {
  //     setUser(data);
  //     navigate("/Dashboard", { replace: true });
  //   };
  // const [akun, setAkun] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/akun")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAkun(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/akun");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }

  //       const data = await response.json();
  //       setAkun(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // let username = "";
  // let pass = "";
  // console.log(akun);
  // if (akun.length > 0) {
  //   username = akun[0].id; // Access the 'id' property from the first element in the array
  //   pass = akun[0].password; // Access the 'password' property from the first element in the array
  //   console.log(username);
  //   console.log(pass);
  // }

  // useEffect(() => {
  //   const checkSessionTimeout = () => {
  //     const sessionTimeout = 1 * 60 * 1000; // 15 minutes in milliseconds
  //     const lastActiveTime = localStorage.getItem("lastActiveTime");

  //     if (lastActiveTime) {
  //       const currentTime = new Date().getTime();
  //       const elapsedTime = currentTime - parseInt(lastActiveTime, 10);

  //       if (elapsedTime > sessionTimeout) {
  //         // Session expired, perform logout
  //         setUser(null);
  //         navigate("/", { replace: true });
  //         toastRef.current.show({
  //           severity: "info",
  //           summary: "Session Expired",
  //           detail: "Please login again.",
  //           sticky: true,
  //         });
  //       }
  //     }

  //     // Update last active time
  //     localStorage.setItem("lastActiveTime", new Date().getTime().toString());
  //   };

  //   const intervalId = setInterval(checkSessionTimeout, 1000); // Check every second

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [user, navigate, setUser]);

  const toastRef = useRef(null);
  const login = async (userName, password) => {
    // Make a call to the authentication API to check the username

    // console.log(akun);
    // console.log(username);
    // console.log(pass);
    // const foundUser = akun.find(
    //   (user) => user.id === userName && user.password === password
    // );

    // localStorage.setItem("lastActiveTime", new Date().getTime().toString());

    return new Promise((resolve, reject) => {
      if (userName === "admin" && password === "admin") {
        // const loggedInUser = { name: userName, isAuthenticated: true };
        setUser(userName);
        navigate("/Dashboard", { replace: true });
        console.log("berhasil");
        // Simpan informasi pengguna ke penyimpanan lokal
        // localStorage.setItem("user", JSON.stringify(loggedInUser));

        resolve("success");
        toastRef.current.show({
          severity: "success",
          summary: "Login Success",
          life: 1200,
        });
      } else {
        console.log("gagal");
        reject("Incorrect password");
        toastRef.current.show({
          severity: "error",
          summary: "Login Failed",
          detail: "Invalid username or password.",
          life: 1200,
        });
      }
    });
  };
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      <Toast ref={toastRef} />
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
