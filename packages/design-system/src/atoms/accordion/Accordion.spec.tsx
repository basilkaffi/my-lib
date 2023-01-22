import { render } from '@testing-library/react';

import Accordion from './Accordion';

describe('Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Accordion title='Accordion title'>accordion children</Accordion>);
    expect(baseElement).toBeTruthy();
  });
});
