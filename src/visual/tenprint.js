import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

function tenprint (p) {
    let tileWidth, tileHeight, inner, numSlider, numRects;
    let n = 0;
    let slide = false;
    
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
            slide = true;
            p.mouseClicked();
        }
    }

    p.mouseClicked = function () {
        if((p.mouseX > 0 && p.mouseY > 0 && p.mouseX < p.width && p.mouseY < p.height) || n === 0 || slide){
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
            n ++;
            slide = false;
        }
    }
}

function ten_print_circ (p) {
    let tileWidth, tileHeight, inner, numSlider, numRects;
    let n = 0;
    let slide = false;
    
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
            slide = true;
            p.mouseClicked();
        }
    }
    
    p.mouseClicked = function () {
        if((p.mouseX > 0 && p.mouseY > 0 && p.mouseX < p.width && p.mouseY < p.height) || n === 0 || slide){
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
            n++;
            slide = false;
        }
    }
}

function ten_print_fill (p) {
    let tileWidth, tileHeight, inner, numSlider, numRects, colors, coloring;
    let tileValues = [];
    let n = 0;
    let slide = false;
    
    p.setup = function () {
        inner = document.getElementById('P5Canvas3').getBoundingClientRect();
        let canvas = p.createCanvas(inner.width, inner.width);
        canvas.parent("P5Canvas3");

        numSlider = p.createSlider(2, 50, 10, 2);
        numSlider.size(p.width);
        numSlider.parent('slider3');
        numRects = numSlider.value();
        tileWidth = p.width/numRects;
        tileHeight = p.height/numRects;
        p.noStroke();
        p.mouseClicked();
    }
    
    p.draw = function () {
        if (numSlider.value() !== numRects) {
            numRects = numSlider.value();
            tileWidth = p.width/numRects;
            tileHeight = p.height/numRects;
            p.mouseClicked();
        }
        slide = true;
    }
    
    p.mouseClicked = function () {
        if((p.mouseX > 0 && p.mouseY > 0 && p.mouseX < p.width && p.mouseY < p.height) || n === 0 || slide){
            p.background(230);
            for (let y = 0; y <= (p.height / tileHeight); y++) {
                tileValues[y] = [];
                for (let x = 0; x <= p.width / tileWidth; x++) {
                    tileValues[y][x] = p.random([0, 1]);
                }
            }

            colors = [[p.random(50, 70), p.random(90, 110), 100], [230, 230, 230]];
            coloring = colorTiles(tileValues);
            for (let i = 0; i < tileValues.length; i++) {
                for (let j = 0; j < tileValues[0].length; j++) {
                    p.fill(colors[coloring[i][j]][0], colors[coloring[i][j]][1], colors[coloring[i][j]][2]); //Add some alpha for fun
                    p.rect(j * tileWidth, i * tileHeight, tileWidth, tileHeight)
                    p.fill(colors[(coloring[i][j] + 1) % 2][0], colors[(coloring[i][j] + 1) % 2][1], colors[(coloring[i][j] + 1) % 2][2]);
        
                    //Curves
                    if (tileValues[i][j] === 0) { // 0 == top left, bottom right curve
                        p.arc(j * tileWidth, i * tileHeight, tileWidth, tileHeight, 0, p.HALF_PI);
                        p.arc((j + 1) * tileWidth, (i + 1) * tileHeight, tileWidth, tileHeight, p.PI, p.PI + p.HALF_PI);
                    } else { // 1 == top right, bottom left curve
                        p.arc((j + 1) * tileWidth, i * tileHeight, tileWidth, tileHeight, p.HALF_PI, p.PI);
                        p.arc(j * tileWidth, (i + 1) * tileHeight, tileWidth, tileHeight, p.PI + p.HALF_PI, 0);
                    }
        
                    //Lines
                    // if (tileValues[i][j] == 0) { // 0 == top left, bottom right curve
                    //     triangle(j * tileWidth, i * tileHeight, j * tileWidth + tileWidth/2, i * tileHeight, j * tileWidth, i * tileHeight + tileHeight/2);
                    //     triangle((j + 1) * tileWidth, (i + 1) * tileHeight, j * tileWidth + tileWidth/2, (i + 1) * tileHeight, (j + 1) * tileWidth, i * tileHeight + tileHeight/2);
                    // } else { // 1 == top right, bottom left curve
                    //     triangle((j + 1) * tileWidth, i * tileHeight, j * tileWidth + tileWidth/2, i * tileHeight, (j + 1) * tileWidth, i * tileHeight + tileHeight/2);
                    //     triangle(j * tileWidth, (i + 1) * tileHeight, j * tileWidth + tileWidth/2, (i + 1) * tileHeight, j * tileWidth, i * tileHeight + tileHeight/2);
                    // }
                }
            }
            n++;
            slide = false;
        }
    }
}

function colorTiles(tileValues) {
    //For any neighboring tiles, if they have the same pattern, they have opposite colorings and opposite pattern = same coloring
    let colorArray = [[0]];

    for (let y = 1; y < tileValues.length; y++) { //sets the first column
        if (tileValues[y][0] === tileValues[y-1][0]) {
            colorArray[y] = [(colorArray[y-1][0] + 1) % 2];
        } else {
            colorArray[y] = [colorArray[y-1][0]];
        }
    }

    for (let y = 0; y < tileValues.length; y++) {
        for(let x = 1; x < tileValues[0].length; x++) {
            if (tileValues[y][x] === tileValues[y][x-1]) {
                colorArray[y][x] = (colorArray[y][x-1] + 1) % 2;
            } else {
                colorArray[y][x] = colorArray[y][x-1];
            }
        }
    }
    return colorArray;
}

export default function tenprint_html() {
    return(
        <div>
            <div className="section">
                <h1 className="title is-1">10 Print</h1>
                <h1 className="subtitle is-4">Inle Bush, Jun 2021</h1>
                <br />
                <h1 className="title is-2">Introduction</h1>
                <p>
                    10 PRINT CHR$(205.5+RND(1)); : GOTO 10
                    Is a single line maze generation program in Commodore 64 basic
                    described in <a href="https://10print.org/">the book of the same name</a>.
                    It produced a randomized output like the one below:
                </p>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <p>[// image of commodore 64 output]</p>
                </div>
            </div>

            <div className="section">
                <p>
                    The function worked by randomly selecting either the "/" or "\"
                    using their PETSCII character code. And repeatedly printing the
                    randomized character to the screen. I recreated the visualization
                    in p5.js by tiling lines that either ran from the top left to the
                    bottom right of their tile or from the top right to the bottom left
                    of their tile.
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
                    I found that the could be substituted with the following
                    tiles to produce interesting results:
                </p>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <p>[// image of two tiles]</p>
                </div>
            </div>

            <div className="section">
                <p>
                    Here is the visualization:
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
                    Naturally, the next step is to flood this visualization with color.
                    If we color the board with 2 colors, there are two possible tile colorings. 
                    Either the background is color1 and the circles are color2 or the opposite.
                    After a little analysis of ideal coloring in diferent layouts, I stumbled
                    upon this general principle to get continuous coloring: 
                    for any neighboring tiles, if they had the same pattern, they must have 
                    opposite coloring patterns. If they had opposite tiles, they must have the same 
                    coloring pattern.
                </p>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <h1 className="subtitle is-4 has-text-centered">Visualization 2: Colored 10 Print</h1>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd" id="P5Canvas3">
                    <P5Wrapper sketch={ten_print_fill}/>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <div className="is-centered" id="slider3"></div>
                </div>
            </div>

            <div className="columns is-mobile is-centered">
                <div className="column is-three-quarters-mobile is-three-quarters-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <p>Click to generate a new visualization. Use the slider to asjust the number of tiles.</p>
                </div>
            </div>

            {/* <div className="section">
                <h1 className="title is-2">The Code</h1>
                <h1 className="title is-3">Visualization 1</h1>
                <p className="content">
                    There are 4 variables determining the position of the point:
                </p>
            </div> */}

            <div className="section">
                <h1 className="title is-2">Sources</h1>
                <ol className="title is-5" type="1">
                    <li><a href="https://www.youtube.com/watch?v=m9joBLOZVEo">10 PRINT CHR$(205.5+RND(1)); : GOTO 10, Thomas Winningham, Youtube</a></li>
                    <li><a href="https://10print.org/">10 PRINT CHR$(205.5+RND(1)); : GOTO 10, Nick Montfort et al., book</a></li>
                    <li><a href="https://www.youtube.com/watch?v=bEyTZ5ZZxZs">Coding Challenge #76: 10PRINT in p5.js, The Coding Train, Youtube</a></li>
                </ol>
            </div>
        </div>
    );
}