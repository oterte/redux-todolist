import React,{useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import TodoCard from './TodoCard'
import { submit_todo, delete_todo, complete_todo } from '../modules/todolist'
import useInput from '../hooks/useInput'
import Button from './Button'
const HeaderContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 20px;
    `
const FormContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    background-color: #ddd;
    font-size: 22px;
    font-weight: bold;
    `
const InputContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const SmallInput = styled.input`
    height: 25px;
    width: 35%;

    padding: 10px;

    border: none;
    border-radius: 10px;
`

const ListContainer = styled.div`
        padding: 20px;
    `
const ListWrapper = styled.div`
        display: flex;
    
    
    flex-wrap: wrap;

    gap: 10px;
    `

function TodoMain() {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.todolist;
    })

    
   

    // 커스텀 훅을 이용해 인풋값 핸들링
    const [title, onChangeTitle, resetTitle] = useInput();
    const [desc, onChangeDesc, resetDesc] = useInput();


    
    const nextId = useRef(3)
    const inputFocus = useRef()



    const addTodoList = () => {
        // 제목과 내용 중 하나라도 비어있으면 추가 안됨
        if(!title || !desc) return;
        dispatch(
            submit_todo({
                id: nextId.current,
                title,
                desc,
                isDone:false
            })
        )
        nextId.current += 1;
        resetTitle();
        resetDesc();
        inputFocus.current.focus()
        
    }

    // 컴포넌트 -> 액션 creator -> 리듀서
    const deleteTodoList = id => {
        
        dispatch(delete_todo({id}))
        // console.log("id : ...." ,id)
    }
    const complteTodoList = id => {
        dispatch(complete_todo({id}))
    }

    return (

        <>
            <HeaderContainer>
                <div>My Todo List</div>
                <div>React</div>
            </HeaderContainer>
            <FormContainer>
                <InputContainer>
                    <label>제목</label>
                    <SmallInput type='text' name="title" value={title}
                                onChange={onChangeTitle}
                                ref={inputFocus}/>
                    <label>내용</label>
                    <SmallInput type='text' name="body" value={desc}
                                onChange={onChangeDesc}/>
                </InputContainer>
                <Button 
                    width={100}
                    height={35}
                    padding={10}
                    desc="추가하기"
                    color="white"
                    handler={addTodoList}></Button>
            </FormContainer>
            <ListContainer>
                <h1>Working.. 🔥</h1>
                <ListWrapper>
                    {data.todos.map((item)=> {
                        if(item.isDone === false){
                            return <TodoCard
                                        todo={item} 
                                        key={item.id}
                                        onCompleteHandler = {complteTodoList}
                                        onDeleteHandler={deleteTodoList}></TodoCard>
                        }
                    } )}
                </ListWrapper>
                <h1>Done..! 🎉</h1>
                <ListWrapper>
                    {data.todos.map((item) => {
                        if(item.isDone){
                            return <TodoCard
                                        todo={item} 
                                        key={item.id}
                                        onCompleteHandler = {complteTodoList}
                                        onDeleteHandler={deleteTodoList}></TodoCard>
                        }
                    })}
                </ListWrapper>
            </ListContainer>
        </>



    )
}

export default TodoMain
