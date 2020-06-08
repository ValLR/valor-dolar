import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './periodForm.scss';

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
        <h3 className="grey">Selecciona un periodo de tiempo:</h3>
        <div className="form-row">
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
          <button className="submit" disabled={disabled} onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default PeriodForm;
