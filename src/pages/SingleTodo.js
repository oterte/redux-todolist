import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { getTodos } from '../api/todoApi'

export default function SingleTodo() {
      // 쿼리로 데이터 불러와야함
      const { data } = useQuery(["todos"], getTodos)

    const params = useParams()
    
    // console.log(data)
    const todo = data.find((element) => String(element.id) === params.id)
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
