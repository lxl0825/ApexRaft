// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApexRaft title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApexRaft/i);
    expect(titleElement).toBeInTheDocument();
});
