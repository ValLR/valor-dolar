import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class PeriodForm extends Component {
  render() {
    const {
      startDate,
      endDate,
      handleStartDate,
      handleEndDate,
      handleSubmit,
      disabled,
    } = this.props;

    return (
      <div id="period-form">
        <h4>Selecciona un periodo de tiempo:</h4>
        <DatePicker
          selected={startDate}
          onChange={handleStartDate}
          dateFormat="dd/MM/yyyy"
          disabled={disabled}
          maxDate={new Date()}
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDate}
          dateFormat="dd/MM/yyyy"
          disabled={disabled}
          maxDate={new Date()}
        />
        <button disabled={disabled} onClick={handleSubmit}>Enviar</button>
      </div>
    );
  }
}

export default PeriodForm;
