import { object, oneOf, number, shape, string } from 'prop-types';

export default shape({
  name: string,
  amount: number,
  startDate: object, // eslint-disable-line react/forbid-prop-types
  frequency: oneOf(['weekly', 'monthly', 'annually']).isRequired,
});
