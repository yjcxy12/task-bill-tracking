import React from 'react';
import dayjs from 'dayjs';
import { render } from '@testing-library/react';
import ListItem from './ListItem';

jest.mock('dayjs', () => (date) => {
  const originalDayjs = jest.requireActual('dayjs');
  if (date) return originalDayjs(date);
  return originalDayjs('2020-09-09');
});

describe('<ListItem />', () => {
  const payment = {
    name: 'Rent',
    amount: 100,
    startDate: dayjs('2020-09-09'),
    frequency: 'weekly',
  };

  it('should render list item correctly', () => {
    const { getByTestId } = render(<ListItem payment={payment} />);
    expect(getByTestId('payment-list-item')).toBeTruthy();
  });

  it('should use startDate as next payment date if startDate is after today', () => {
    const { getByTestId } = render(
      <ListItem payment={{ ...payment, startDate: dayjs('2020-11-11') }} />
    );
    expect(getByTestId('next-payment-date')).toHaveTextContent(
      'Next: 11th November, 2020'
    );
  });

  it('should calculate next payment date correctly if startDate is before today', () => {
    const { getByTestId } = render(
      <ListItem
        payment={{
          ...payment,
          startDate: dayjs('2020-07-11'),
          frequency: 'monthly',
        }}
      />
    );
    expect(getByTestId('next-payment-date')).toHaveTextContent(
      'Next: 11th September, 2020'
    );
  });
});
