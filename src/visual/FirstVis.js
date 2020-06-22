import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

function sketch (p) {
    let rotation = 0;
  
    p.setup = function () {
        p.createCanvas(600, 400);
    };
  
    // p.myCustomRedrawAccordingToNewPropsHandlers = function (props) {
    //     if (props.rotation) {
    //         rotation = props.rotation * Math.PI / 180;
    //     }
    // };
  
    p.draw = function () {
        p.circle(200, 200, 30);
    };

    p.mouseClicked = function () {
        p.square(10, 10, 50);
    }
};

export default function FirstVis() {
    return(
        <P5Wrapper sketch={sketch} />
    );
}