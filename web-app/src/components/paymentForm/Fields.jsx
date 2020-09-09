import React, { useCallback } from 'react';
import { func } from 'prop-types';
import dayjs from 'dayjs';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import paymentShape from '../paymentList/shapes';

const Fields = ({ payment, onChange }) => {
  const onNameChange = useCallback(
    (e) => {
      if (onChange) onChange({ ...payment, name: e.target.value });
    },
    [onChange, payment]
  );
  const onAmountChange = useCallback(
    (e) => {
      if (onChange)
        onChange({ ...payment, amount: parseInt(e.target.value, 10) });
    },
    [onChange, payment]
  );
  const onStartDateChange = useCallback(
    (e) => {
      if (onChange) onChange({ ...payment, startDate: dayjs(e.target.value) });
    },
    [onChange, payment]
  );
  const onFrequencyChange = useCallback(
    (e) => {
      if (onChange) onChange({ ...payment, frequency: e.target.value });
    },
    [onChange, payment]
  );

  return (
    <>
      <div>
        <TextField
          required
          id="name"
          label="Name"
          value={payment.name}
          onChange={onNameChange}
        />
      </div>
      <div>
        <TextField
          required
          id="amount"
          label="Amount"
          type="number"
          value={payment.amount}
          onChange={onAmountChange}
        />
      </div>
      <div>
        <TextField
          required
          id="start-date"
          label="Start date"
          type="date"
          value={dayjs(payment.startDate).format('YYYY-MM-DD')}
          onChange={onStartDateChange}
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
          value={payment.frequency || 'weekly'}
          onChange={onFrequencyChange}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </Select>
      </div>
    </>
  );
};

Fields.propTypes = {
  payment: paymentShape,
  onChange: func,
};

Fields.defaultProps = {
  payment: {},
  onChange: undefined,
};

export default Fields;
