import { render, screen } from '@testing-library/react'

import Image from './Image'

describe('image', () => {
  it('should render a <img> tag', () => {
    expect.hasAssertions()
    render(<Image alt="MOCK_SRC" src="MOCK_SRC" />)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'MOCK_SRC')
  })
})
