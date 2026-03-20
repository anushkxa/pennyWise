import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const DEFAULT_DASHBOARD_URL = (() => {
    const origin = window.location.origin;
    const match = origin.match(/:(\d+)$/);
    if (match) {
      const port = Number(match[1]);
      //  dashboard runs on 5173, so when frontend runs on 5174,
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
      const res = await fetch("http://localhost:3002/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          username,
          password,
          createdAt: new Date().toISOString(),
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setError(data?.message || "Signup failed");
        return;
      }

      window.location.href = DASHBOARD_URL;
    } catch (err) {
      setError("Network error during signup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-3">Signup</h1>
      <p>Create your PennyWise account to start investing.</p>

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
          <label className="form-label">Username</label>
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </form>
    </div>
  );
}

export default Signup;

