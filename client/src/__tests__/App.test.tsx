import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
  test('Render app page', () => {
    render(<App />);

    expect(screen.queryByText('Game')).toBeInTheDocument();
  });
});
