import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {ClubSearch} from '../clubSearch';
import {test, describe} from 'vitest';
import {MemoryRouter} from 'react-router-dom';

describe('ClubDetails', () => {
  // not needed as react testing library cleans up dom
  //beforeEach(()=>{
  //    document.body.innerHTML = '';
  //})

  test('renders basic club details', async () => {
    render(
      <MemoryRouter>
        <ClubSearch />
      </MemoryRouter>,
    );

    //const searchInput = await screen.findByRole<HTMLInputElement>('textbox', {
    //  name: /club-search/i,
    //});
    //console.dir(searchInput);
    await waitFor(() =>
      expect(
        screen.getByRole<HTMLInputElement>('textbox', {name: /club-search/i}),
      ).toBeInTheDocument(),
    );
    //console.dir(screen);
    const searchInput = await screen.findByRole<HTMLInputElement>('textbox', {
      name: /club-search/i,
    });
    expect(screen.getByRole('link', {name: /woking/i})).toBeInTheDocument();
    expect(
      screen.getByRole('link', {name: /knaphill fc/i}),
    ).toBeInTheDocument();

    fireEvent.change(searchInput, {target: {value: 'woking'}});
    expect(searchInput.value).toBe('woking');

    expect(screen.getByRole('link', {name: /woking/i})).toBeInTheDocument();
    expect(
      screen.queryByRole('link', {name: /knaphill fc/i}),
    ).not.toBeInTheDocument();

    fireEvent.change(searchInput, {target: {value: 'knap'}});
    expect(
      screen.queryByRole('link', {name: /woking/i}),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole('link', {name: /knaphill fc/i}),
    ).toBeInTheDocument();

    fireEvent.change(searchInput, {target: {value: 'i'}});
    expect(screen.queryByRole('link', {name: /woking/i})).toBeInTheDocument();

    expect(
      screen.queryByRole('link', {name: /knaphill fc/i}),
    ).toBeInTheDocument();
  });
});
