import { oneOf, number, shape, string } from 'prop-types';

export default shape({
  name: string.isRequired,
  amount: number.isRequired,
  startDate: string.isRequired,
  frequency: oneOf(['weekly', 'monthly', 'annually']).isRequired,
});
