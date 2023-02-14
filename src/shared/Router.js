import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoMain from "../components/TodoMain"
import SingleTodo from "../pages/SingleTodo"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoMain />} />
                <Route path="/todolist/:id" element={<SingleTodo />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router