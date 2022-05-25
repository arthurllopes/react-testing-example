import { fireEvent, getAllByTestId, render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Todo from "./Todo"

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTasks = (tasks) => {
    const button = screen.getByText('Add')
    const input = screen.getByPlaceholderText('Add a new task here...')

    tasks.forEach(task => {
        fireEvent.change(input, {target: {value: task}})
        fireEvent.click(button)
    })
}

describe('integration test', () => {

    it("should be able to add task", () => {
        const {getByText, getByPlaceholderText} = render(<MockTodo />)
        
        const button = getByText('Add')
        const input = getByPlaceholderText('Add a new task here...')

        const text = 'New task'

        fireEvent.change(input, {target: {value: text}})

        fireEvent.click(button)

        const listElement = getByText(text)

        //input value to be empty
        expect(input.value).toBe('')

        //list element to have text added by the input
        expect(listElement).toBeInTheDocument()
        //expect().toBe(1)

    })

    it("should render ALL the tasks", () => {
        const {getAllByTestId, debug} = render(<MockTodo />)

        const tasks = ['Clean room', 'Buy grocery', 'Shower']
        
        addTasks(tasks)

        //getting all tasks that has the "data-testid'='task-container"
        //at the component, the list return an item with the testid for each of the item list
        //so, it will return an array of 3 items
        const listElement = getAllByTestId('task-container')

        expect(listElement.length).toBe(3)

    })

    it('should not have completed class initially', () => {
        const {getAllByTestId, debug, getByText} = render(<MockTodo />)

        const task = ['New task']
        addTasks(task)

        const item = getByText(task)
        expect(item).not.toHaveAttribute('class', 'todo-item-active')
    })

    it('should cross the text on click', () => {
        const {getByText, debug} = render(<MockTodo />)

        const task = ['New task']
        addTasks(task)

        const item = getByText(task)

        fireEvent.click(item)

        expect(item).toHaveClass("todo-item-active")

    })
    
    it('should exclude item from the list', async () => {
        const {getAllByText, debug, queryByText} = render(<MockTodo />)

        
        const tasks = ['Clean room', 'Buy grocery', 'Shower']
        addTasks(tasks)
        
        const button = getAllByText('X')

        fireEvent.click(button[0])

        await waitFor(() => (
            expect(queryByText('Clean room')).not.toBeInTheDocument()
        ))

    })


})