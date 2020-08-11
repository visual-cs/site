import React from 'react';
import { Redirect } from 'react-router-dom';

import epicycloid_html from './epicycloid';
import tenprint_html from './tenprint';
import boids_html from './boids';

const names = {
    'epicycloid': epicycloid_html,
    'tenprint': tenprint_html,
    'boids': boids_html
}


const VisualRenderer = ({ match }) => {
    const { params: { vis_name } } = match;
    const SelectedVisual = names[vis_name];

    // if link is improper
    if (SelectedVisual == null) {
        return <Redirect to="/visual" />
    }

    return <SelectedVisual />;
}

export default VisualRenderer;