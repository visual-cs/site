import React from 'react';

function About() {
  return (
      <div>
        <div className="section has-background-white-ter">
          <h1 className="title is-1 has-text-centered">Meet Us:</h1>
        </div>
        <div className="columns has-background-white-ter">
          <div className="column has-background-white-ter is-5 is-offset-1">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></img>
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Inle Bush</p>
                    <p class="subtitle is-6">@imbush</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </div>

          <div className="column has-background-white-ter is-5">
            <div class="card">
              <div class="card-image">
                <figure class="image is-">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></img>
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Komron Aripov</p>
                    <p class="subtitle is-6">@karipov</p>
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
  );
}

export default About;