import React, { Component } from 'react';
import ExampleAtom from '../atoms/ExampleAtom';

export default class ExampleMolecule extends Component {
  render() {
    return (
      <div className="molecule-flex-item">
        <ExampleAtom />
      </div>
    );
  }
}
