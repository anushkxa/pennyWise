import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const DEFAULT_DASHBOARD_URL = (() => {
    const origin = window.location.origin;
    const match = origin.match(/:(\d+)$/);
    if (match) {
      const port = Number(match[1]);
      // When both apps run with Vite, the other app is often on the adjacent port.
      // In your current setup, dashboard runs on 5173, so when frontend runs on 5174,
      // `port - 1` points to the dashboard.
      return origin.replace(/:\d+$/, `:${Math.max(1, port - 1)}/`);
    }
    return "http://localhost:5173/";
  })();

  const DASHBOARD_URL =
    import.meta.env.VITE_DASHBOARD_URL || DEFAULT_DASHBOARD_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3002/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setError(data?.message || "Login failed");
        return;
      }

      window.location.href = DASHBOARD_URL;
    } catch (err) {
      setError("Network error during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-3">Login</h1>
      <p>Login to access your dashboard.</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : null}

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;

