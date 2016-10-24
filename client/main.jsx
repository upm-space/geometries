import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

//uncomment this section for spline editor visulization
/*
import SplineEditor from '../imports/etsiae/dave/eg/spline-editor.jsx';

Meteor.startup(() => {
  render(<SplineEditor />, document.getElementById('render-target'));
});
*/

// uncommetn this section for three.js visulization
/*
import '../imports/etsiae/dave/eg/test/drawThree.js';
*/

// uncomment this section for our app

import App from '../imports/etsiae/dave/eg/app_bezier.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

