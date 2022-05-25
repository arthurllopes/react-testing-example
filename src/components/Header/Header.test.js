import Header from './Header';
import {render } from '@testing-library/react'
it('header title showing up', async () => {
    const {getByText} = render(<Header title="Todo"/>)

    const heading = getByText('Todo')
    expect(heading).toBeInTheDocument()

})