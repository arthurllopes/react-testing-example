import { fireEvent, render } from "@testing-library/react"
import AddInput from "./AddInput"

const mockedSetTodo = jest.fn()

describe("testing add function", () => {

    it("should render input element", () => {
        const {getByPlaceholderText} = render(<AddInput todos={[]} setTodos={mockedSetTodo} />)

        const input = getByPlaceholderText('Add a new task here...')

        expect(input).toBeInTheDocument()
    })

    it("should change the input value", () => {
        const {getByPlaceholderText} = render(<AddInput todos={[]} setTodos={mockedSetTodo}/>)
        
        const input = getByPlaceholderText('Add a new task here...')

        const text = 'New task'

        fireEvent.change(input, {target: {value: text}})

        expect(input.value).toBe(text)

    })

    it("should clear input value after clicking to add task", () => {
        const {getByRole, getByPlaceholderText} = render(<AddInput todos={[]} setTodos={mockedSetTodo}/>)
        
        const button = getByRole('button', {name: 'Add'})
        const input = getByPlaceholderText('Add a new task here...')

        const text = 'New task'

        //changing input value
        fireEvent.change(input, {target: {value: text}})

        //adding to list
        fireEvent.click(button)


        //expecting the input to be empty after adding the old value to the list
        expect(input.value).toBe('')

    })

})