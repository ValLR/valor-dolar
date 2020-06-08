import React, { Component } from 'react';

import PeriodForm from '../PeriodForm/PeriodForm';
import Result from '../Result/Result';
import './home.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      loading: false,
      data: [],
      startDate: new Date(),
      endDate: new Date(),
    };
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStartDate(date) {
    this.setState({
      startDate: date,
    });
  };

  handleEndDate(date) {
    this.setState({
      endDate: date,
    });
  }

  getMonth = (date) => date.getMonth() + 1;

  handleSubmit() {
    const { startDate, endDate } = this.state;
    const apikey = '9c84db4d447c80c74961a72245371245cb7ac15f';
    const url = 'https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/';
    
    this.setState({
      loading: true,
      error: undefined,
    });
    fetch(`${url}${startDate.getFullYear()}/${this.getMonth(startDate)}/dias_i/${startDate.getDate()}/${endDate.getFullYear()}/${this.getMonth(endDate)}/dias_f/${endDate.getDate()}?apikey=${apikey}&formato=json`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            data: result.Dolares,
          });
        },
        (error) => {
          this.setState({
            loading: false,
            error,
          });
        }
      )
  }

  render() {
    const { data, error, startDate, endDate, loading } = this.state;
    return (
      <div id="home">
        <PeriodForm
          startDate={startDate}
          endDate={endDate}
          handleStartDate={e => this.handleStartDate(e)}
          handleEndDate={e => this.handleEndDate(e)}
          handleSubmit={this.handleSubmit}
          disabled={loading}
        />
        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
        {error && <div className="error">Se ha producido un error, por favor vuelva a intentarlo más tarde.</div> }
        <div className={loading ? 'loading' : ''}>
          {data.length > 0 && <Result data={data} />}               
        </div>
      </div>
    );
  }
}

export default Home;