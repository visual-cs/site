import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

function cardioid (p) {
    var x = 0;

    p.setup = function () {
        p.createCanvas(600, 400);
    };
  
    // p.myCustomRedrawAccordingToNewPropsHandlers = function (props) {
    //     if (props.rotation) {
    //         rotation = props.rotation * Math.PI / 180;
    //     }
    // };
  
    p.draw = function () {
        p.background(0, 0, 0, 50);
        p.circle(300, 200 + 100 * p.sin(x), 30);
        x += 0.1;
    };

    p.mouseClicked = function () {
        p.square(10, 10, 50);
    }
};

export default function FirstVis() {
    return(
        <div>
            <div className="section">
                <p className="subtitle is-10">
                    As the inaugural post on our new website, I would like 
                    to begin by saying “Hello World!” and expressing my 
                    hope that you enjoy the site. It was an adventure to 
                    build and we had a lot of fun doing so. :)
                </p>    
            </div>
            
            <div className="section">
                <h1 className="title">Epicycloids by Inle Bush</h1>
                <p>
                    An epicycloid is the curve traced by following a point on 
                    the circumference of one circle rolling around another. 
                    It is demonstrated simply in the following visualization:
                </p>
            </div>

            <div className="section">
                [// gif of rolling circle]
            </div>

            <div className="section">
                <p>
                    If the outer circle has radius r and the inner circle has 
                    radius R, we can define the ratio between these two sides, 
                    R/r = k. Varying k results in some interesting patterns.
                </p>
            </div>
            
            <div className="section">
                <P5Wrapper sketch={cardioid} />
            </div>
            
            <div className="section">
                <p>
                    For integer k, the number of “leaves” on the epicyclod is equal 
                    to k. For rational k, p/q as an irreducible fraction, then k has 
                    p “leaves”. Setting k to an irrational number, like pi, causes a 
                    non repeating path which eventually fills the entire annulus (donut) 
                    with inner radius R and outer radius R + 2r.
                </p>
            </div>
            
            <div className="section">
                [// image epicycloid where k=pi]
            </div>

            <div className="section">
                <p>
                    Interestingly, for any epicycloid with integer k, the 
                    epicycloid will have cusps (inner points) at all fractions 
                    of a full rotation which are multiples of 1/k. For example, 
                    when k = 3, cusps are present at 1/3, 2/3 and 3/3 of a full 
                    rotation around the circle. This is a result of the epicycloid 
                    splitting the rotation into k “leaves”. 
                    By plotting all of the epicycloids where 0 {'<'} k {'<='} n, 
                    I am able to create a visual representation of all of the 
                    fractions {'<'} 1, which can be represented as an integral fraction 
                    with denominator {'<='} n. In other words, this program displays all 
                    rational numbers, p/q, where q {'<='} n.
                </p>

            </div>
            
            <div className="section">
                <P5Wrapper sketch={cardioid} />
            </div>

            <div className="section">
                <p>
                    If n is increased to infinity, the angle placements of each of the 
                    cusps in the image will represent every rational numbers. I find 
                    this pretty cool.
                </p>
            </div>
        </div>
    );
}