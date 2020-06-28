import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

function tenprint (p) {
    let tileWidth, tileHeight, inner, numSlider, numRects;
    
    p.setup = function () {
        inner = document.getElementById('P5Canvas1').getBoundingClientRect();
        let canvas = p.createCanvas(inner.width, inner.width);
        canvas.parent("P5Canvas1");

        numSlider = p.createSlider(2, 50, 10, 2);
        numSlider.size(p.width);
        numSlider.parent('slider1');
        numRects = numSlider.value();
        tileWidth = p.width/numRects;
        tileHeight = p.height/numRects;
        p.stroke(255);
        p.strokeWeight(3);
        p.mouseClicked();
    }
    
    p.draw = function () {
        if (numSlider.value() !== numRects) {
            numRects = numSlider.value();
            tileWidth = p.width/numRects;
            tileHeight = p.height/numRects;
            p.mouseClicked();
        }
    }

    p.mouseClicked = function () {
        p.background(0);
        for (let x = 0; x <= p.width; x += tileWidth) {
            for (let y = 0; y <= p.height; y += tileHeight) {
                let i = p.random([0, 1]);

                if (i === 0) {
                    p.line(x, y, x + tileWidth, y + tileHeight);
                } else {
                    p.line(x + tileWidth, y, x, y + tileHeight);
                }
            }
        }
    }
}

function ten_print_circ (p) {
    let tileWidth, tileHeight, inner, numSlider, numRects;
    
    p.setup = function () {
        inner = document.getElementById('P5Canvas2').getBoundingClientRect();
        let canvas = p.createCanvas(inner.width, inner.width);
        canvas.parent("P5Canvas2");

        numSlider = p.createSlider(2, 50, 10, 2);
        numSlider.size(p.width);
        numSlider.parent('slider2');
        numRects = numSlider.value();
        tileWidth = p.width/numRects;
        tileHeight = p.height/numRects;
        p.stroke(255);
        p.strokeWeight(3);
        p.noFill();
        p.mouseClicked();
    }
    
    p.draw = function () {
        if (numSlider.value() !== numRects) {
            numRects = numSlider.value();
            tileWidth = p.width/numRects;
            tileHeight = p.height/numRects;
            p.mouseClicked();
        }
    }
    
    p.mouseClicked = function () {
        p.background(0);
        for (let x = 0; x <= p.width; x += tileWidth) {
            for (let y = 0; y <= p.height; y += tileHeight) {
                let i = p.random([0, 1]);

                if (i === 0) {
                    p.arc(x, y, tileWidth, tileHeight, 0, p.HALF_PI);
                    p.arc(x + tileWidth, y + tileHeight, tileWidth, tileHeight, p.PI, p.PI + p.HALF_PI);
                } else {
                    p.arc(x + tileWidth, y, tileWidth, tileHeight, p.HALF_PI, p.PI);
                    p.arc(x, y + tileHeight, tileWidth, tileHeight, p.PI + p.HALF_PI, 0);
                }
            }
        }
    }
}



function ten_print_fill (p) {
    let tileWidth, tileHeight, inner, numSlider, numRects;
    
    p.setup = function () {
        inner = document.getElementById('P5Canvas2').getBoundingClientRect();
        let canvas = p.createCanvas(inner.width, inner.width);
        canvas.parent("P5Canvas2");

        numSlider = p.createSlider(2, 50, 10, 2);
        numSlider.size(p.width);
        numSlider.parent('slider2');
        numRects = numSlider.value();
        tileWidth = p.width/numRects;
        tileHeight = p.height/numRects;
        p.stroke(255);
        p.strokeWeight(3);
        p.noFill();
        p.mouseClicked();
    }
    
    p.draw = function () {
        if (numSlider.value() !== numRects) {
            numRects = numSlider.value();
            tileWidth = p.width/numRects;
            tileHeight = p.height/numRects;
            p.mouseClicked();
        }
    }
    
    p.mouseClicked = function () {
        p.background(0);
        for (let x = 0; x <= p.width; x += tileWidth) {
            for (let y = 0; y <= p.height; y += tileHeight) {
                let i = p.random([0, 1]);

                if (i === 0) {
                    p.arc(x, y, tileWidth, tileHeight, 0, p.HALF_PI);
                    p.arc(x + tileWidth, y + tileHeight, tileWidth, tileHeight, p.PI, p.PI + p.HALF_PI);
                } else {
                    p.arc(x + tileWidth, y, tileWidth, tileHeight, p.HALF_PI, p.PI);
                    p.arc(x, y + tileHeight, tileWidth, tileHeight, p.PI + p.HALF_PI, 0);
                }
            }
        }
    }
}

// function colorTiles() {
//     //For any neighboring tiles, if they have the same pattern, they have opposite colorings and opposite pattern = same coloring
//     let colorArray = [[0]];

//     for (let y = 1; y < tileValues.length; y++) { //sets the first column
//         if (tileValues[y][0] == tileValues[y-1][0]) {
//             colorArray[y] = [(colorArray[y-1][0] + 1) % 2];
//         } else {
//             colorArray[y] = [colorArray[y-1][0]];
//         }
//     }

//     for (let y = 0; y < tileValues.length; y++) {
//         for(let x = 1; x < tileValues[0].length; x++) {
//             if (tileValues[y][x] == tileValues[y][x-1]) {
//                 colorArray[y][x] = (colorArray[y][x-1] + 1) % 2;
//             } else {
//                 colorArray[y][x] = colorArray[y][x-1];
//             }
//         }
//     }
//     return colorArray;
// }
export default function tenprint_html() {
    return(
        <div>
            <div className="section">
                <h1 className="title is-1">10 Print</h1>
                <h1 className="subtitle is-4">Inle Bush, Jun 2021</h1>
                <br />
                <h1 className="title is-2">Introduction</h1>
                <p>
                    An epicycloid is the curve traced by following a point on 
                    the circumference of one circle rolling around another.
                    If the outer circle has radius r and the inner circle has 
                    radius R, we can define the ratio between these two sides, 
                    R/r = k. Varying k results in interesting patterns, 
                    demonstrated in the following visualization.
                </p>
            </div>
            
            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <h1 className="subtitle is-4 has-text-centered">Visualization 1: 10-Print</h1>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd" id="P5Canvas1">
                    <P5Wrapper sketch={tenprint}/>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <div className="is-centered" id="slider1"></div>
                </div>
            </div>
            
            <div className="columns is-mobile is-centered">
                <div className="column is-three-quarters-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <p>Click to generate a new visualization. Use the slider to asjust the number of tiles.</p>
                </div>
            </div>
            
            <div className="section">
                <p>
                    For integer k, the number of “leaves” on the epicycloid is equal 
                    to k. For rational k, p/q as an irreducible fraction, then k has 
                    p “leaves”. Setting k to an irrational number, like pi, causes a 
                    non repeating path which eventually fills the entire annulus (donut) 
                    with inner radius R and outer radius R + 2r.
                </p>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <p>[// image epicycloid where k=pi]</p>
                </div>
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

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <h1 className="subtitle is-4 has-text-centered">Visualization 1.2: Circular 10 Print</h1>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd" id="P5Canvas2">
                    <P5Wrapper sketch={ten_print_circ}/>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <div className="is-centered" id="slider2"></div>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-three-quarters-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <p>Click to generate a new visualization. Use the slider to asjust the number of tiles.</p>
                </div>
            </div>

            <div className="section">
                <p>
                    If n is increased to infinity, the angle placements of each of the 
                    cusps in the image will represent every rational numbers. I find 
                    this pretty cool.
                </p>
            </div>

            <div className="section">
                <h1 className="title is-2">The Code</h1>
                <h1 className="title is-3">Visualization 1</h1>
                <p className="content">
                    There are 4 variables determining the position of the point:
                </p>
                <ol type="1">
                    <li><b>Angle1</b> {'-->'} the angle offsetting the center of the outer circle from the 
                center of the inner circle (in degrees from the positive x-axis in the code).</li>
                    <li><b>Angle2</b> {'-->'} the angle of the point from the center of the outer circle (in degrees 
                from the positive x-axis).</li>
                    <li><b>Radius1</b> {'-->'} The radius of the inner circle</li>
                    <li><b>Radius2</b> {'-->'} The radius of the outer circle</li>
                </ol>
            </div>
        </div>
    );
}