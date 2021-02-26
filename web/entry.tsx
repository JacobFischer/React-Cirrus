import React from 'react';
import { render } from 'react-dom';

console.log('Hello world from the app');

import { Avatar, Button } from '../src';

render(
  <section className="section">
    <div className="hero fullscreen">
      <div className="hero-body">
        <div className="content">
          <div className="text-center">
            <h1>👋 Hello world!</h1>
            <h6 className="font-alt font-light">
              A webpage powered by <b>Cirrus.</b>
            </h6>
          </div>
          <div>
            <Button as="div" color="success">
              Hello!
            </Button>
            <Avatar name="MWM" size="large" />
          </div>
        </div>
      </div>
    </div>
  </section>,
  document.getElementById('main'),
);
