import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

function epicycloid (p) {
    let path, radOut, radIn, ratio, xCentOut, yCentOut, ptX, ptY;
    let speed = 0.1;//angle per update
    let ang = 0;
    let mode = 0;
    
    p.setup = function () {
        p.createCanvas(500, 500);
        p.angleMode(p.DEGREES);
        // strokeWeight(2);
        radIn = p.width / 5;
    
        //image for path
        path = p.createGraphics(p.width, p.height);
        path.strokeWeight(2);
        path.stroke(220, 30, 30);
    
        p.ratioSlider = p.createSlider(-10, 10, 1, 2);
        p.ratioSlider.position(10,70);
        p.ratio = p.ratioSlider.value();
        p.frameRate(60);
        p.stroke(25)
        p.strokeWeight(3);
        p.fill(255);
    }
    
    p.mouseClicked = function () {
        mode = (mode + 1) % 2;
    }
    
    p.draw = function () {
        for ( let i = 0; i < 10; i++) {
        p.background(153);
        if (p.ratioSlider.value() !== p.ratio) {
            p.ratio = p.ratioSlider.value()
            path.clear(); //resets path if ratio is changed
    
        }
        p.text(p.ratioSlider.value(), p.ratioSlider.x * 2 + p.ratioSlider.width, 15);
    
        
        
        if (p.ratioSlider.value() >= -1 && p.ratioSlider.value() <= 0) {
            p.ratio = -1.1;
        }   else {
            p.ratio = p.ratioSlider.value(); // ratio = (inner radius : outer radius)
        }
        
            radOut = radIn / ratio;
            xCentOut = p.width / 2 + (radOut + radIn) * p.cos(ang);
            yCentOut = p.height / 2 + (radOut + radIn) * p.sin(ang);
    
            if (mode === 1){
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
    }
}

function epicycloid_trace(p) {
    let ratio = 0; //Outer to innner radius
    let radOut = 150 / (ratio + 1);
    let radIn = radOut * ratio;
    let limit = 2;
    let increment = 0.001;
    let ptX, ptY;
    
    
    p.setup = function () {
      p.createCanvas(500, 500);
      p.background(20, 10, 30);
    }
    
    
    p.mouseClicked = function () {
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
        p.text(`k = ${ratio}`, p.width / 50 , p.height * 3 / 50);
    }
}

export default function epicycloid_html() {
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
                <P5Wrapper sketch={epicycloid} />
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
            
            <div className="box">
                <P5Wrapper sketch={epicycloid_trace} className ="box is-centered"/>
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