import config from './config';

export const getPayments = async () => {
  const res = await fetch(`${config.host}/payments`);
  const payments = await res.json();
  return payments;
};

export const addPayment = async (payment) => {
  const res = await fetch(`${config.host}/payments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payment),
  });
  return res.json();
};
