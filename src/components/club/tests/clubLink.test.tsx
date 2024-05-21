import {render, screen} from '@testing-library/react';
import {ClubLink} from '../clubLink';
import {test, expect, describe} from 'vitest';
import {MemoryRouter} from 'react-router-dom';

describe('ClubDetails', () => {
  // not needed as react testing library cleans up dom
  //beforeEach(()=>{
  //    document.body.innerHTML = '';
  //})

  test('renders basic club details', () => {
    render(
      <MemoryRouter>
        <ClubLink url={'wokingham'} name={'wokingham'} active={false} />
        <ClubLink url={'woking'} name={'woking'} active={true} />
        <ClubLink url={'sheerwater'} name={'sheerwater'} active={true} />
        <ClubLink
          url={'chesterfield-fc'}
          name={'chesterfield fc'}
          active={false}
        />
      </MemoryRouter>,
    );
    const linkElementActiveClub = screen.getByRole('link', {name: /^woking$/i});
    expect(linkElementActiveClub).toBeVisible();
    expect(linkElementActiveClub).not.toHaveClass('InActiveClub');
    const linkElementInActiveClub = screen.getByRole('link', {
      name: /chesterfield fc/i,
    });
    expect(linkElementInActiveClub).toBeVisible();
    expect(linkElementInActiveClub).toHaveClass('InActiveClub');
  });
});
