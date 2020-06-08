import React, { Component } from 'react';

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
              return parseFloat(node.Valor.replace(',', '.'));
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
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);

   console.log(maxValue, minValue);
    return (
      <div>
        <div>
          máximo: {data.length && Math.max(...data)}
        </div>
        <div>
          mínimo: {data.length && Math.min(...data)}
        </div>
      </div>
    );
  }
}

export default Home;