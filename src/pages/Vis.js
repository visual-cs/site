import React from 'react';
import { Link } from "react-router-dom";

function Visual() {
  return (
    <div className="section">
      <div className="tile is-ancestor">

        <Link className="tile is-parent" to="/visual/boids">
          <article className="tile is-child box">
            <p className="title">Boids</p>
            <p className="subtitle">by Komron Aripov</p>
            <figure className="image is-square">
              <img src="images/visual/boids/boids.jpg" alt="boids"></img>
            </figure>
          </article>
        </Link>

        <Link className="tile is-parent" to="/visual/tenprint">
          <article className="tile is-child box">
            <p className="title">10 print</p>
            <p className="subtitle">by Inle Bush</p>
            <figure className="image is-square">
              <img src="images/visual/tenprint/tenprint.jpg" alt="tenprint"></img>
            </figure>
          </article>
        </Link>
      
        <Link className="tile is-parent" to="/visual/epicycloid">
          <article className="tile is-child box">
            <p className="title">Epicycloids</p>
            <p className="subtitle">by Inle Bush</p>
            <figure className="image is-square">
              <img src="images/visual/epicycloid/epicycloid_trace.jpg" alt="cardiod"></img>
            </figure>
          </article>
        </Link>
      </div>

    </div>
  );
}

export default Visual;
