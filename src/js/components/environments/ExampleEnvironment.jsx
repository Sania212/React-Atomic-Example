import React, { Component } from 'react';
import ExampleEcosystem from '../ecosystems/ExampleEcosystem';

export default class ExampleEnvironment extends Component {
  render() {
    return (
      <div className="environment-flex-container">
        <ExampleEcosystem />
        <ExampleEcosystem />
      </div>
    );
  }
}
