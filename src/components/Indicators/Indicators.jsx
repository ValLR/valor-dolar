import React, { Component } from 'react';

class Indicators extends Component {
  render() {
    const { max, min, average } = this.props;
    return (
      <div>
        <div>
          máximo: {max}
        </div>
        <div>
          mínimo: {min}
        </div>
        <div>
          promedio: {average}
        </div>
      </div>
    );
  }
}

export default Indicators;
