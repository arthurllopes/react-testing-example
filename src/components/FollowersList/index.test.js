import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import FollowersList from "./FollowersList"

//it needs this mock bc theres an link in the component
const MockFollowersList = () => (
    <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
)

describe('fetching users', () => {

    it('should render first user', async () => {

        const {debug, findAllByTestId, getByText} = render(<MockFollowersList/>)

        const item = await findAllByTestId('follower-item')

        expect(item[0]).toBeInTheDocument()

    })
    it('should render users list', async () => {
        const {debug, findAllByTestId, getByText} = render(<MockFollowersList/>)

        const item = await findAllByTestId('follower-item')

        expect(item.length).toBe(3)

    })
})