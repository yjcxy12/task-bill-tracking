import dayjs from 'dayjs';

export const paymentDateToStr = (payment) => ({
  ...payment,
  startDate: dayjs(payment.startDate).format('YYYY-MM-DD'),
});

export const paymentStrToDate = (payment) => ({
  ...payment,
  startDate: dayjs(payment.startDate),
});
