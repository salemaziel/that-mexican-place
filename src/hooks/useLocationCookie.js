// src/hooks/useLocationCookie2.js
import { useState, useEffect } from "react";

const useLocationCookie = (cookieName) => {
  const [cookieValue, setCookieValue] = useState(() => {
    if (typeof document !== "undefined") {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${cookieName}=`));
      return cookie ? cookie.split("=")[1] : "";
    }
    return "";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${cookieName}=`));
      setCookieValue(cookie ? cookie.split("=")[1] : "");
    }
  }, [cookieName]);

  const setCookie = (value, expirationDate) => {
    document.cookie = `${cookieName}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  };

  const deleteCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  return [cookieValue, setCookie, deleteCookie];
};

export default useLocationCookie;
