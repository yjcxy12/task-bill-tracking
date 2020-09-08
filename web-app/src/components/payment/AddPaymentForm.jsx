import React, { useState, useCallback } from 'react';
import { func } from 'prop-types';
import dayjs from 'dayjs';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

// Can improve with form library + validation etc
const AddPaymentForm = ({ onSubmit: onSubmitProp }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState();
  const [startDate, setStartDate] = useState(dayjs());
  const [frequency, setFrequency] = useState('weekly');

  const onSubmit = useCallback(() => {
    onSubmitProp({ name, amount, startDate, frequency });
  }, [name, amount, startDate, frequency, onSubmitProp]);

  const canSubmit = name && amount && startDate && frequency;

  return (
    <form>
      <div>
        <TextField
          required
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="amount"
          label="Amount"
          type="number"
          vaule={amount}
          onChange={(e) => setAmount(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <TextField
          required
          id="start-date"
          label="Start date"
          type="date"
          value={startDate.format('YYYY-MM-DD')}
          onChange={(e) => setStartDate(dayjs(e.target.value))}
        />
      </div>
      <div>
        <InputLabel htmlFor="frequency">Frequency</InputLabel>
        <Select
          required
          native
          inputProps={{
            name: 'frequency',
            id: 'frequency',
          }}
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </Select>
      </div>

      <button type="button" onClick={onSubmit} disabled={!canSubmit}>
        Add new payment
      </button>
    </form>
  );
};

AddPaymentForm.propTypes = {
  onSubmit: func,
};

AddPaymentForm.defaultProps = {
  onSubmit: undefined,
};

export default AddPaymentForm;
