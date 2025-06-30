import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
  const [isAuthorized, setAuthorized] = useState(null);

  useEffect(() => {
    auth().catch(() => {
      setAuthorized(false);
    }); // Check authorization on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/token/refresh/", { refresh: refreshToken });
      if (res.status === 200) {
        const { access } = res.data;
        localStorage.setItem(ACCESS_TOKEN, access);
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
    } catch (error) {
      setAuthorized(false);
      console.error("Error refreshing token:", error);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setAuthorized(false);
      return;
    }
    const decodedToken = jwtDecode(token);
    const tokenExpiration = decodedToken.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();

    if (tokenExpiration < currentTime) {
      // Token is expired, try to refresh
      await refreshToken();
    } else {
      // Token is valid
      setAuthorized(true);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
