import React, { useEffect, useState } from "react";

const useColorTheme = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      let check;
      if (userPref) {
        check = userPref === "dark" ? "dark" : "light";
      } else {
        check = mediaQuery.matches ? "dark" : "light";
      }
      setMode(check);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useColorTheme;
