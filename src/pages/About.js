import React from 'react';

function About() {
  return (
      <div>
        <div className="section">
          <h1 className="title is-1 has-text-centered">Meet Us:</h1>
        </div>
        <div className="section">
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img src="images/komron.png" alt="komron"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Komron Aripov</p>
                      <p class="subtitle is-6"><a href="https://github.com/karipov">@karipov</a></p>
                    </div>
                  </div>

                  <div class="content">
                    Math enthusiast and aspiring software developer.
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-5">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-">
                    <img src="images/inle.png" alt="inle"></img>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Inle Bush</p>
                      <p class="subtitle is-6"><a href="https://github.com/imbush">@imbush</a></p>
                    </div>
                  </div>
                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                  </div>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </div>
  );
}

export default About;