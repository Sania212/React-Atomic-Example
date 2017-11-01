import React, { Component } from 'react';
import ExampleOrganism from '../organisms/ExampleOrganism';

export default class ExampleEcosystem extends Component {
  render() {
    return (
      <div className="ecosystem-flex-container ecosystem-flex-item">
        <ExampleOrganism />
       
      </div>
    );
  }
}
