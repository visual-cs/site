import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

function epicycloid(p) {
    let inner, ratioSlider, path;
    let radOut, radIn, ratio, xCentOut, yCentOut, ptX, ptY;
    let speed = 0.1;//angle per update
    let ang = 0;
    let mode = 0;
    let increment = 0.1;
    
    p.setup = function () {
        inner = document.getElementById('P5Canvas1').getBoundingClientRect();
        let canvas = p.createCanvas(inner.width, inner.width);
        canvas.parent("P5Canvas1")
        p.angleMode(p.DEGREES);
        radIn = p.width / 6.1;
    
        //image for path
        path = p.createGraphics(p.width, p.height);
        path.strokeWeight(2);
        path.stroke(220, 30, 30);
    
        ratioSlider = p.createSlider(-10, 10, 1, increment);
        ratioSlider.size(p.width);
        ratioSlider.parent('slider');
        ratio = ratioSlider.value();
        p.frameRate(30);
        p.strokeWeight(3);
        p.fill(255);
    }
    
    p.mouseClicked = function () {
        if(p.mouseX > 0 && p.mouseY > 0 && p.mouseX < p.width && p.mouseY < p.height){
            mode = (mode + 1) % 2;
        }
    }
    
    p.draw = function () {
        p.background(153);
        p.stroke(25);
        p.fill(255);

        if (ratioSlider.value() !== ratio) {
            (ratioSlider.value >= -1 && ratioSlider.value <= 0) ? (ratio = increment) : (ratio = ratioSlider.value());
            path.clear(); //resets path if ratio is changed
            ang = 0;
        }

        for ( let i = 0; i < 10; i++) {
            
        
            radOut = radIn / ratio;
            xCentOut = p.width / 2 + (radOut + radIn) * p.cos(ang);
            yCentOut = p.height / 2 + (radOut + radIn) * p.sin(ang);
    
            if (mode === 0){
                p.circle(p.width/2, p.height/2, 2 * radIn);// inner Circle
                p.circle(xCentOut, yCentOut, 2 * radOut);
            }
    
    
            p.line(p.width/2, p.height/2, xCentOut, yCentOut);
            ptX = p.width / 2 + (radOut + radIn) * p.cos(ang) - radOut * p.cos((ratio + 1) * ang);
            ptY = p.height / 2 + (radOut + radIn) * p.sin(ang) - radOut * p.sin((ratio + 1) * ang);
            path.point(ptX, ptY);
    
            p.line(xCentOut, yCentOut, ptX, ptY);
            ang -= speed;
        }
        p.image(path, 0, 0);

        p.noStroke();
        p.fill(0);
        p.textSize(p.width / 20);
        p.text(`k = ${ratio}`, p.width / 50 , p.height * 3 / 50);
    }
}

function epicycloid_trace(p) {
    let inner;
    let ratio = 0; //Outer to innner radius
    let radOut = 150 / (ratio + 1);
    let radIn = radOut * ratio;
    let limit = 2;
    let increment = 0.001;
    let ptX, ptY;
    
    
    p.setup = function () {
        inner = document.getElementById('P5Canvas2').getBoundingClientRect();
        let canvas = p.createCanvas(inner.width, inner.width);
        canvas.parent("P5Canvas2");
        p.background(20, 10, 30);
        p.mouseClicked();
    }
    
    
    p.mouseClicked = function () {
        if((p.mouseX > 0 && p.mouseY > 0 && p.mouseX < p.width && p.mouseY < p.height) || ratio === 0){
            p.stroke(155, 140, 255, 30);
            
            p.noFill();
            p.push();
            p.translate(p.width / 2, p.height / 2);
            
            for (let i = 1; i < limit; i ++) {
                ratio += 1;
                radOut = p.width * 5 / 12 / (ratio + 2); // Width * 5/12 is maximum radius
                radIn = radOut * ratio;
                for (let ang = 0; ang <= p.TWO_PI; ang += increment) {
                    ptX = (radOut + radIn) * p.cos(ang) - radOut * p.cos((ratio + 1) * ang);
                    ptY = (radOut + radIn) * p.sin(ang) - radOut * p.sin((ratio + 1) * ang);
                    p.point(ptX, ptY);
                }
            }
            p.pop();
        
            p.fill(20, 10, 30);
            p.noStroke();
            p.rect(0, 0, p.width / 5, p.height / 5) //Background for text
        
            p.stroke(255);
            p.noStroke();
            p.textSize(p.width / 20);
            p.fill(255);
            p.text(`n = ${ratio}`, p.width / 50 , p.height * 3 / 50);
        }
    }
}

export default function epicycloid_html() {
    return(
        <div>
            <div className="section">
                <h1 className="title is-size-1-desktop is-size-2-mobile">Epicycloids</h1>
                <h1 className="subtitle is-4">Inle Bush, Jun 2021</h1>
                <br />
                <h1 className="title is-2">Introduction</h1>
                <p>
                    An epicycloid is the curve traced by following a point on 
                    the circumference of one circle rolling around another.
                    If the outer circle has radius <b><i>r</i></b> and the inner circle has 
                    radius <b><i>R</i></b>, we can define the ratio between these two sides, 
                    <b><i>R/r = k</i></b>. Varying k results in interesting patterns, 
                    demonstrated in the following visualization.
                </p>
            </div>
            
            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <h1 className="subtitle is-4 has-text-centered">Visualization 1: Rolling Epicycloid</h1>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd" id="P5Canvas1">
                    <P5Wrapper sketch={epicycloid}/>
                </div>
            </div>
            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                <div className="is-centered" id="slider"></div>
                </div>
            </div>
            
            <div className="columns is-mobile is-centered">
                <div className="column is-three-quarters-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <p>Click on this visualization to hide the circles. Use the slider to adjust k.</p>
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
                    <img src='/images/visual/epicycloid/pi_epicycloid.jpg' alt="pi epicycloid"></img>
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
                    <h1 className="subtitle is-4 has-text-centered">Visualization 2: Traced Epicycloids</h1>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd" id="P5Canvas2">
                    <P5Wrapper sketch={epicycloid_trace}/>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-three-quarters-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <p>Click on this visualization to increase n.</p>
                </div>
            </div>

            <div className="section">
                <p>
                    If n is increased to infinity, the angle placements of each of the 
                    cusps in the image will represent every rational number.
                </p>
            </div>

            <div className="section">
                <h1 className="title is-2">The Code</h1>
                <h1 className="title is-3">Visualization 1</h1>
                <p className="content">
                    There are 4 variables determining the position of the point:
                </p>
                <dl>
                    <li><b>Angle1</b> {'-->'} the angle offsetting the center of the outer circle from the 
                center of the inner circle (in degrees from the positive x-axis in the code).</li>
                    <li><b>Angle2</b> {'-->'} the angle of the point from the center of the outer circle (in degrees 
                from the positive x-axis).</li>
                    <li><b>Radius1</b> {'-->'} The radius of the inner circle</li>
                    <li><b>Radius2</b> {'-->'} The radius of the outer circle</li>
                </dl>
            </div>
        </div>
    );
}