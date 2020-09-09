// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import '@testing-library/jest-dom/extend-expect';

dayjs.extend(advancedFormat);
