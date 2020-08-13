import React from 'react';
import Highlight from 'react-highlight';


export default function boids_html() {
    return(
        <div>
            <div className="section">
                <div className="content">


                    <h1 className="title">Boids</h1>
                    <p className="subtitle"><em>Komron Aripov, Jun 2021</em></p>


                    <h2>Introduction</h2>
                    <p>
                        Boids is an algorithm that simulates flocking, e.g. the movements exhibited
                        by a group of birds. It was originally developed by Craig Renolds in 1986.
                        In its most basic form, the algorithm uses 3 simple rules from which more
                        complex behaviours emerge:
                    </p>

                        <ol type="1">
                            <li><strong>Separation</strong> - avoidance of local flockamtes</li>
                            <li><strong>Alignment</strong> - movement towards average direction
                            of local flockmates</li>
                            <li><strong>Cohesion</strong> - movement towards the average position
                            of local flockmates</li>
                        </ol>

                    <p>
                        More rules, such as obstacle avoidance or goal pursuit can be added for
                        variety.
                    </p>


                    <h2>Code</h2>
                    <p>
                        For this project we use <strong>p5.js</strong>. Firstly, we must define a number of constants:
                    </p>
                    <Highlight className="javascript">{[
                        'let flock;',

                        'let max_velocity = 2;',
                        'let max_force = 0.5;',
                        'let flock_size = 200;'
                    ].join('\n')}</Highlight>
                    <p>
                        These will be used later in the program to help us define how many birds
                        we want, at what speed they should move and how suddenly should they change
                        their movement. The <strong>flock</strong> variable is declared undefined;
                        it will be later used to store the boids themselves.
                    </p>
                    <p>
                        In the setup function for p5.js we initialize the canvas and the flock in the following manner:
                    </p>

                    <Highlight className="javascript">{[
                        'function setup() {',
                        '   createCanvas(500, 500);',
                        '',
                        '   flock = [];',
                        '   for (let i = 0; i < flock_size; i++) {',
                        '       flock.push(new Boid(',
                        '           position = createVector(random(width), random(height)),',
                        '           velocity = createVector(random(-10, 10), random(-10, 10)),',
                        '           acceleration = createVector(random(-4, 4), random(-4, 4))',
                        '       ));',
                        '   }',
                        '}',
                    ].join('\n')}</Highlight>

                    <p>
                        As you can see here we are defining that <strong>flock</strong> variable as
                        a list and pushing into it a newly initialized <strong>Boid</strong> class.
                        This class is what will be responsible for applying each of the above rules
                        to every boid. Within the initialization we are passing p5.js vectors
                        related to <em>position</em>, <em>velocity</em> and <em>acceleration</em>.
                        These vectors are randomly generated to a certain range.
                    </p>

                    <Highlight className="javascript">{[
                        'class Boid {',
                        '    constructor(',
                        '        position,',
                        '        velocity,',
                        '        acceleration,',
                        '        sight',
                        '    ) {',
                        '        this.position = position;',
                        '        this.velocity = velocity;',
                        '        this.acceleration = acceleration;',
                        '        this.sight = sight;',
                        '    }',
                        '',
                        '    updatePosition() {}',
                        '',
                        '    show() {}',
                        '}'
                    ].join('\n')}</Highlight>

                    <p>
                        The actual implementation of the program is best done in parts: first
                        implementing cohesion, then alignment, and then separation.
                    </p>

                    <h4>Cohesion:</h4>

                    <h2>Demo</h2>
                    <div className="p5Container">
                        <script type="text/p5"></script>
                    </div>
                    <h2>Sources</h2>
                    <ol type="1">
                        <li><a href="https://www.youtube.com/watch?v=mhjuuHl6qHM">
                            Coding Challenge #124: Flocking Simulation
                        </a></li>
                        <li><a href="http://www.red3d.com/cwr/boids/">
                            Boids - Background and Update, by Craig Reynolds</a></li>
                        <li><a href="http://www.vergenet.net/~conrad/boids/pseudocode.html">
                            Boids Pseudocode by Conrad Parker © 1995-2010
                        </a></li>
                    </ol>
                </div>


            </div>
        </div>
    )
}