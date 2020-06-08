import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import './chart.scss';

class Chart extends Component {
  render() {
    const { data } = this.props;
    return (
      <div id="chart">
        <LineChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Fecha" />
          <YAxis
            domain={['dataMin-0.5','dataMax+0.5']}
            tickFormatter={tick => {
              return tick.toLocaleString('es-ES')
            }}
          />
          <Tooltip formatter={(value) => new Intl.NumberFormat('es').format(value)} />
          <Line type="monotone" dataKey="Valor" stroke="#04044c" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    );
  }
}

export default Chart;
