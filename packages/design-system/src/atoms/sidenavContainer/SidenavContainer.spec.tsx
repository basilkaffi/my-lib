import { render } from '@testing-library/react';

import SidenavContainer from './SidenavContainer';

describe('SidenavContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidenavContainer/>);
    expect(baseElement).toBeTruthy();
  });
});
