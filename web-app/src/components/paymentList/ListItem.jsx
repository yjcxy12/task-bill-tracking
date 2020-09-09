import React from 'react';
import dayjs from 'dayjs';
import capitalize from 'lodash.capitalize';
import paymentShape from './shapes';
import './ListItem.css';

const calculateNextPayment = (date, frequency) => {
  const dayjsDate = dayjs(date);
  if (dayjsDate.isAfter(dayjs())) {
    return dayjsDate;
  }

  switch (frequency) {
    case 'monthly':
      return calculateNextPayment(dayjsDate.add(1, 'month'), frequency);
    case 'annually':
      return calculateNextPayment(dayjsDate.add(1, 'year'), frequency);
    case 'weekly':
    default:
      return calculateNextPayment(dayjsDate.add(1, 'week'), frequency);
  }
};

const ListItem = ({ payment }) => {
  const nextPaymentDate = calculateNextPayment(
    payment.startDate,
    payment.frequency
  ).format('Do MMMM, YYYY');

  return (
    <li data-testid="payment-list-item" className="list-item">
      <div className="list-item__first-row">
        <span data-testid="payment-list-item-name" className="list-item--left">
          {payment.name}
        </span>
        <span className="list-item--right">£{payment.amount}</span>
      </div>
      <div className="list-item__second-row">
        <span className="list-item--left">{capitalize(payment.frequency)}</span>
        <span data-testid="next-payment-date" className="list-item--right">
          Next: {nextPaymentDate}
        </span>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  payment: paymentShape.isRequired,
};

export default ListItem;
