import React,{useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import TodoCard from './TodoCard'
import { submit_todo, delete_todo, complete_todo } from '../modules/todolist'

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
const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: black;

    padding: 10px;

    font-size: 18px;
    font-weight: bold;
    color: white;
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

    
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const nextId = useRef(3)
    const inputFocus = useRef()

    const addTodoList = () => {
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
        setTitle('');
        setDesc('');
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
                                onChange={(e) => setTitle(e.target.value)}
                                ref={inputFocus}/>
                    <label>내용</label>
                    <SmallInput type='text' name="body" value={desc}
                                onChange={(e) => setDesc(e.target.value)}/>
                </InputContainer>
                <Button onClick={addTodoList}>추가하기</Button>
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
