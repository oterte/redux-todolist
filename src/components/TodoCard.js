import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'


const TodoContainer = styled.div`
    border: 3px solid black;
    border-radius: 10px;

    width: 300px;
    height: 150px;

    padding: 10px;

    text-align: center;
`
const P = styled.p`
    color:slategray;
`
const DeleteButton = styled.button`
    border-radius: 10px;
    border: none;

    padding: 5px;
    width: 100px;
    height: 45px;

    font-weight: bold;
    background-color: green;
    color: white;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
    }
`
const ComplteButton = styled.button`
    border-radius: 10px;
    border: none;

    padding: 5px;
    width: 100px;
    height: 45px;
    
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color:black;
        color: white;
    }
`
export default function TodoCard({ todo, onDeleteHandler, onCompleteHandler }) {

    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.todolist;
    })
    
// {todo.isDone ? "취 소" : "완 료"}
// onClick={() => onDeleteHandler(todo.id)}
// onClick={() => onCompleteHandler(todo.id)}

    return (
        <TodoContainer>
            <h2>{todo.title}</h2>
            <P>{todo.desc}</P>
            <DeleteButton onClick={() => {onDeleteHandler(todo.id)} }>
                삭 제
            </DeleteButton>

            <ComplteButton
                        onClick={() => {onCompleteHandler(todo.id)}}>
                {todo.isDone ? "취소" : "완료"}
            </ComplteButton>
        </TodoContainer>
    )
}
