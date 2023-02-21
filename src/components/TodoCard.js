import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import Button from './Button'

const TodoContainer = styled.div`
    border: 3px solid black;
    border-radius: 10px;
    width: 300px;
    height: 150px;
    padding: 10px;
    /* text-align: center; */
`
const P = styled.p`
    color:slategray;
`

export default function TodoCard({ todo, onDeleteHandler, onCompleteHandler }) {

 
    return (
        <TodoContainer>
            
            <h2>{todo.title}</h2>
            <P>{todo.desc}</P>
            <Button 
                width={100}
                height={35}
                padding={5}
                color="white"
                bgColor="green"
                desc="삭제"
                
                handler={() => {onDeleteHandler(todo.id)} }>
                
            </Button>
            
            <Button
                    width={100}
                    height={35}
                    padding={5}
                    bgColor="white"
                    color="black"
                    desc={todo.isDone ? "취소" : "완료"}
                    handler={() => {onCompleteHandler(todo.id)}}>
                
            </Button>
                <Link to={`/todolist/${todo.id}`}>상세보기</Link>
            
        </TodoContainer>
    )
}
