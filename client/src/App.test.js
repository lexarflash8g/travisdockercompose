import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
test('renders learn react link', () => {});
=======
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> f9d9395446baf41988cc15763956ddb20e6b34d5
