import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

export default function SingleTodo() {
    


    const params = useParams()
    const data = useSelector((state) => {
        return state.todolist;
    })
    // console.log(data)
    const todo = data.todos.find((element) => String(element.id) === params.id)
    // console.log(todo)
  return (
    <div>
        <p>id: {todo.id}</p>
        <div>title: {todo.title}</div>
        <div>todo : {todo.desc}</div>
        <Link to={`/`}><button>이전으로</button></Link>
    </div>
  )
}
