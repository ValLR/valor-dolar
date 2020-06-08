import React, { Component } from 'react';
import { formatString, getMax, getMin, getAverage } from '../../helpers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/2010/01/dias_i/04/2010/01/dias_f/05?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.Dolares.map((node) => {
              return formatString(node.Valor);
            })
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const { data } = this.state;
    return (
      <div>
        {data.length > 0 && (
          <div>
            <div>
              máximo: {getMax(data)}
            </div>
            <div>
              mínimo: {getMin(data)}
            </div>
            <div>
              promedio: {getAverage(data)}
            </div>
          </div>
        )}               
      </div>
    );
  }
}

export default Home;