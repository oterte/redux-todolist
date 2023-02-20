import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
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
// const DeleteButton = styled.button`
//     border-radius: 10px;
//     border: none;

//     padding: 5px;
//     width: 100px;
//     height: 35px;

//     font-weight: bold;
//     background-color: green;
//     color: white;
//     margin-right: 10px;
//     &:hover{
//         cursor: pointer;
//     }
// `
const ComplteButton = styled.button`
    border-radius: 10px;
    border: none;

    padding: 5px;
    width: 100px;
    height: 35px;
    
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color:black;
        color: white;
    }
`
const DetailButton = styled.button`
    border-radius: 10px;
    border: none;
    width: 80px;
    padding: 5px;
    margin-left: 5px;
    height: 35px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color:black;
        color: white;
    }

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
                // width, height, padding, color
                desc="삭제"
                onClick={() => {onDeleteHandler(todo.id)} }>
                
            </Button>
            
            <Button
                    width={100}
                    height={35}
                    padding={5}
                    color="red"
                    desc={todo.isDone ? "취소" : "완료"}
                    onClick={() => {onCompleteHandler(todo.id)}}>
                
            </Button>
                <Link to={`/todolist/${todo.id}`}>상세보기</Link>
            
        </TodoContainer>
    )
}
