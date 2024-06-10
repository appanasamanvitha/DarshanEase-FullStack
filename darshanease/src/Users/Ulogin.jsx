import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaSignOutAlt } from 'react-icons/fa';

const Ulogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    axios
      .post("http://localhost:9000/user/ulogin", payload)
      .then((res) => {
        console.log("login: " + res.data.Status);
        if (res.data.Status === "Success") {
          console.log(res.data.user);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          navigate('/uhome');
          alert("login successful");
        } else {
          alert("wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/usignup");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      <Link to="/" style={{ position: "absolute", top: "10px", right: "10px", color: "black" }}><FaSignOutAlt/></Link>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div>
          <img src='https://i.pinimg.com/originals/76/e0/a7/76e0a7523d04994163f4c8ff1d897349.jpg' alt="Background" style={{ height: "360px", width: "270px" }} />
        </div>
        <div>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Login to user account</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label htmlFor="email" style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "5px" }}
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: "0.5rem",paddingLeft:"1rem", border: "1px solid #ccc", borderRadius: "5px" }}
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "#ff4d4d", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "5px", cursor: "pointer", transition: "background-color 0.3s" }}
            >
              Log in
            </button>
            <p style={{ fontSize: "0.875rem" }}>
              Don't have an account? Create
              <button
                onClick={formHandle1}
                style={{ color: "#ff4d4d", marginLeft: "0.5rem", border: "none", background: "none", cursor: "pointer", textDecoration: "underline" }}
              >
                Signup
              </button>
            </p>
          </form>
        </div>
      </div>
      <div style={{ marginTop: "2rem", textAlign: "center", width: "270px" }}>
        <p style={{ fontStyle: "italic", fontSize: "0.875rem", color: "#666", margin: "0 auto" }}>
          "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
        </p>
      </div>
    </div>
  );
};

export default Ulogin;
