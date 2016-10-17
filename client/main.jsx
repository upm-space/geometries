import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/etsiae/dave/eg/app_bezier.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
