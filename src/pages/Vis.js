import React from 'react';
import { Link } from "react-router-dom";

function Visual() {
  return (
    <div className="section">
      <div class="tile is-ancestor">
        <Link className="tile is-parent" to="/visual/tenprint">
          <article class="tile is-child box">
            <p class="title">10 print</p>
            <p class="subtitle">by Inle Bush</p>
            <figure class="image is-square">
              <img src="images/visual/tenprint.jpg" alt="tenprint"></img>
            </figure>
          </article>
        </Link>
        
        <Link className="tile is-parent" to="/visual/epicycloid">
          <article class="tile is-child box">
            <p class="title">Epicycloids</p>
            <p class="subtitle">by Inle Bush</p>
            <figure class="image is-square">
              <img src="images/visual/epicycloid_trace.jpg" alt="cardiod"></img>
            </figure>
          </article>
        </Link>
      </div>
    </div>
  );
}

export default Visual;