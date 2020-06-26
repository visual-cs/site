import React from 'react';
import { Link } from "react-router-dom";

function Visual() {
  return (
    <div className="section">
      <div class="tile is-ancestor">

        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Tenprint</p>
            <p class="subtitle">by Inle Bush</p>
            <figure class="image is-square">
              <img src="images/visual/tenprint.jpg" alt="tenprint"></img>
            </figure>
          </article>
        </div>
        
        <Link className="tile is-parent" to="/visual/epicycloid">
          <article class="tile is-child box">
            <p class="title">Epicycloid</p>
            <p class="subtitle">by Inle Bush</p>
            <figure class="image is-square">
              <img src="images/visual/epicycloid_trace.jpg" alt="cardiod"></img>
            </figure>
          </article>
        </Link>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Hello World</p>
            <p class="subtitle">What is up?</p>
            <figure class="image is-square">
              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
            </figure>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Hello World</p>
            <p class="subtitle">What is up?</p>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
            </figure>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Hello World</p>
            <p class="subtitle">What is up?</p>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
            </figure>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Hello World</p>
            <p class="subtitle">What is up?</p>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png"></img>
            </figure>
          </article>
        </div>
      </div>

      
    </div>
  );
}

export default Visual;