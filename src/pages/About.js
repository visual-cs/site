import React from 'react';

function About() {
  return (
      <div>
        <div className="section">
          <h1 className="title is-1 has-text-centered">Meet Us:</h1>
          <br />
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src="images/komron.png" alt="komron"></img>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Komron Aripov</p>
                      <p className="subtitle is-6"><a href="https://github.com/karipov">@karipov</a></p>
                    </div>
                  </div>

                  <div className="content">
                    Math enthusiast and aspiring software developer.
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-5">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-">
                    <img src="images/inle.png" alt="inle"></img>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Inle Bush</p>
                      <p className="subtitle is-6"><a href="https://github.com/imbush">@imbush</a></p>
                    </div>
                  </div>
                  <div className="content">
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