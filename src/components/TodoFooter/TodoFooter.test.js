import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TodoFooter from "./TodoFooter"

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {

    it('should render aumount of tasks left', async () => {
        const amount = 4
        const {getByText} = render(<MockTodoFooter numberOfIncompleteTasks={amount} />)
    
        const paragraph = amount + " tasks left"
        const tasks = getByText(paragraph)
    
        expect(tasks).toBeInTheDocument()
    })
    
    it('should render task if theres only one task left', async () => {
        const {getByText} = render(<MockTodoFooter numberOfIncompleteTasks={1} />)
    
        const tasks = getByText(/1 task left/i)
    
        expect(tasks).toBeInTheDocument()
    })

})

describe("paragraph showing up", () => {
    
    it('should render paragraph', async () => {
        const {getByTestId} = render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    
        const paragraphElement = getByTestId('paragraph') 
    
        
        //se o element tiver uma "opacity: 0" ele vai estar invisivel, então o teste vai falhar
        
        //o elemento esta visivel entao vai passar o teste
        expect(paragraphElement).toBeVisible()
    
        //expect(paragraphElement.textContent).toBe("1 task left")
        //expect(paragraphElement).toHaveTextContent("1 task left")
    })

})
