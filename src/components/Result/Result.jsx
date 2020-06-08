import React, { Component } from 'react';
import { getMax, getMin, getAverage, formatData } from '../../helpers';

import Indicators from '../Indicators/Indicators';
import Chart from '../Chart/Chart';

class Result extends Component {
  render() {
    const { data } = this.props;
    return (
      <div id="result">
        <Indicators
          max={getMax(data)}
          min={getMin(data)}
          average={getAverage(data)}
        />
        <Chart data={formatData(data)} />
      </div>
    );
  }
}

export default Result;
