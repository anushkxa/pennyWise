import { useEffect, useState } from "react";
import axios from "axios";

const AuthGate = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const FRONTEND_LOGIN_URL =
      (() => {
        const defaultLoginUrl = (() => {
          const origin = window.location.origin;
          const match = origin.match(/:(\d+)$/);
          if (match) {
            const port = Number(match[1]);
            return (
              origin.replace(/:\d+$/, `:${port + 1}`) + "/login"
            );
          }
          return "http://localhost:5173/login";
        })();

        return import.meta.env.VITE_FRONTEND_LOGIN_URL || defaultLoginUrl;
      })();

    axios
      .get("http://localhost:3002/auth/me", { withCredentials: true })
      .then(() => {
        if (isMounted) setIsAuthed(true);
      })
      .catch((err) => {
        if (!isMounted) return;
        if (err?.response?.status === 401) {
          window.location.href = FRONTEND_LOGIN_URL;
          return;
        }
        setIsAuthed(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (isAuthed === null) return <div>Loading...</div>;
  if (!isAuthed) return <div>Authorization failed. Please login again.</div>;
  return children;
};

export default AuthGate;

