import React, { Component } from 'react';

import './indicators.scss';

class Indicators extends Component {
  render() {
    const { max, min, average } = this.props;
    return (
      <div id="indicators">
        <div className="section">
          <div className="subtitle primary-color">{average}</div>
          <div className="label grey">Promedio</div>
        </div>
        <div className="section">
          <div className="subtitle primary-color">{max}</div>
          <div className="label grey">Valor máximo</div>
        </div>
        <div className="section">
          <div className="subtitle primary-color">{min}</div>
          <div className="label grey">Valor mínimo</div>
        </div>
      </div>
    );
  }
}

export default Indicators;
