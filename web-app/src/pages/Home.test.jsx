import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, wait } from '@testing-library/react';
import Home from './Home';
import store from '../state/store';
import { getPayments } from '../service';

jest.mock('../service', () => ({
  getPayments: jest.fn(),
}));

describe('<Home />', () => {
  it('should render Home correctly', async () => {
    getPayments.mockReturnValue(
      Promise.resolve([
        {
          id: 'e178420a-2d18-414b-b31c-1274129f6bb8',
          name: 'Rent',
          amount: 500,
          startDate: '2021-01-07',
          frequency: 'monthly',
        },
        {
          id: 'de0235c3-4061-47b3-a43f-564fcaceb7b5',
          name: 'Gym Membership',
          amount: 19,
          startDate: '2021-02-01',
          frequency: 'monthly',
        },
      ])
    );
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(getByTestId('home')).toBeTruthy();
    expect(getByTestId('home-title')).toHaveTextContent('Regular Payments');
    await wait(() => {
      expect(getAllByTestId('payment-list-item')).toHaveLength(2);
      expect(getAllByTestId('payment-list-item-name')[0]).toHaveTextContent(
        'Rent'
      );
      expect(getAllByTestId('payment-list-item-name')[1]).toHaveTextContent(
        'Gym Membership'
      );
    });
  });
});
