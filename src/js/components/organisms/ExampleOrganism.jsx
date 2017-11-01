import React, { Component } from 'react';
import ExampleMolecule from '../molecules/ExampleMolecule';

export default class ExampleOrganism extends Component {
  render() {
    return (
      <h1 className="organism-flex-item">
        <ExampleMolecule />
        
      </h1>
    );
  }
}