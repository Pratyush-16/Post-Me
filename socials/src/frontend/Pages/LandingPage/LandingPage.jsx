import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to Socials</h2>

      <section>
        <button onClick={() => navigate("/signup")}>Join Now</button>

        <p onClick={() => navigate("/login")}>Already have an accout?</p>
      </section>
    </div>
  );
}
