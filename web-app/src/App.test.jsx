import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('renders title text', () => {
  const { getByText } = render(<App />)

  expect(getByText('Home')).toBeInTheDocument()
})
