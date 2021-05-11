import React from "react";

function Home() {
  return (
    <div
      className="root"
      style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
    >
      <div className="main">
        <h1>
          Grow your Bussiness with <strong>GeeksCode</strong>
        </h1>
        <h5>We are team of talented ideas and web developer. 💻</h5>

        <div className="button" style={{ marginTop: "1rem" }}>
          <button type="button" class="btn btn-outline-secondary">
            Get Started
          </button>
          <div
            className="image"
            style={{ margin: "12px 0px 4px 0px", width: "100%" }}
          >
            <img src="https://source.unsplash.com/1200x400/?code,computer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
