import React from 'react';

function Home() {
  return (
    <div>
      <div className="section">
        <h1 className="title is-3">About</h1>
        <p>
        Visual-CS is a website which hosts and explains computer generated visualizations. 
        Visualization topics range from mathematical explorations to generative art pieces. 
        Many of our posts will cover visualizations already present online or in the 
        literature. For these visualizations, we hope to both explain the process of 
        creating the visualization and expand upon it in some way. Ultimately, this website 
        is a labor of love. It was made because we enjoyed creating and we thought others 
        might enjoy our creations too. 
        </p>
        <h1 className="title is-3">Code Challenges</h1>
        <p>
        This website is built, in part, to allow readers to challenge themselves in recreating
        or expanding upon visualizations. Each post is organized into 2 parts. The first part 
        is an introduction to the visualization(s) found in the post. The second part gives 
        and explains our code for creating the visualization in p5.js, processing or 
        D3.js. When available, outside sources are also provided with each visualization.
        </p>
        <br />
        <h1 className="title is-3">Progress</h1>
        <p>
          This website is still in progress. We are currently working 
          on creating general stylization classes and integrating our 
          p5.js sketches with mobile and bulma. You can follow program 
          progress at <a href="https://t.me/inlesmusings">Inle's telegram channel.</a>
        </p>
      </div>
    </div>
  );
}

export default Home;