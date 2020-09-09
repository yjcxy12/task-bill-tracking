import dayjs from 'dayjs';
import { paymentDateToStr, paymentStrToDate } from './utils';

describe('paymentDateToStr()', () => {
  it('should convert payment.startDate from dayjs object to string format', () => {
    expect(paymentDateToStr({ startDate: dayjs('01-29-2020') })).toEqual({
      startDate: '2020-01-29',
    });
    expect(
      paymentDateToStr({
        startDate: dayjs('07-10-2020').add(1, 'day'),
      })
    ).toEqual({
      startDate: '2020-07-11',
    });
  });

  it('should not change other props in payment', () => {
    expect(
      paymentDateToStr({
        a: 'b',
        test: 'test123',
        startDate: dayjs('01-29-2020'),
      })
    ).toEqual({
      a: 'b',
      test: 'test123',
      startDate: '2020-01-29',
    });
  });

  it('should return today date as startDate if no payment.startDate is passed', () => {
    expect(
      paymentDateToStr({
        a: 'b',
        test: 'test123',
      })
    ).toEqual({
      a: 'b',
      test: 'test123',
      startDate: dayjs().format('YYYY-MM-DD'),
    });
  });
});

describe('paymentStrToDate()', () => {
  it('should convert payment.startDate from string format to dayjs object', () => {
    expect(paymentStrToDate({ startDate: '2020-01-29' })).toEqual({
      startDate: dayjs('2020-01-29'),
    });
  });

  it('should not change other props in the payment', () => {
    expect(
      paymentStrToDate({
        a: 'b',
        test: 'test123',
        startDate: '2020-01-29',
      })
    ).toEqual({
      a: 'b',
      test: 'test123',
      startDate: dayjs('2020-01-29'),
    });
  });
});
