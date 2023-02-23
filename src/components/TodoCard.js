import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import Button from './Button'
import { SmallInput } from './TodoMain'
import { getTodos, updateTodoDesc } from '../api/todoApi'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import useInput from '../hooks/useInput'


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

const Title = styled.div`
    display: flex;
    flex-direction: row;
`
const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
  background: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`

export default function TodoCard({ todo, onDeleteHandler, onCompleteHandler }) {

        
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    const queryClient = useQueryClient()
    

    
    const [changedesc, onChangeDesc, resetDesc] = useInput();
    const changemutation = useMutation(updateTodoDesc, {
        //성공
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
            
        }
    })

    const changeTodoList = (e,id=todo.id) => {
        e.preventDefault();
        if (!changedesc) {
            alert('할 일을 입력해주세요.')
            return   
        }
        // todo.desc = content
        // console.log("id :" , id, "바뀐 투두 :" , todo.desc)
        // changemutation.mutate({id, content})
        // resetDesc()
       
        changemutation.mutate({id, changedesc})
        resetDesc()
        
    }
    

    return (
        <TodoContainer>

            <Title>
                <h2>{todo.title}</h2>
                <Button
                    width={100}
                    height={35}
                    padding={5}
                    handler={handleOpen}
                    bgColor="skyblue"
                    color="black"
                    desc="수정"
                ></Button>
                <Modal isOpen={isOpen} onClose={handleClose}>
                    <ModalBody>
                        <h2>Todo 수정하기</h2>
                        <form onSubmit={changeTodoList}>
                        <SmallInput type='text' name="body" value={changedesc} onChange={onChangeDesc}/>
                        <button 
                                style={{
                                    width: '50px',
                                    height:'50px',
                                    marginLeft : '10px'
                                }}
                                type="submit"
                                onClick={handleClose}>수정</button>
                        <button 
                                style={{
                                    width: '50px',
                                    height:'50px',
                                    marginLeft : '10px'
                                }}
                                    onClick={handleClose}>닫기</button>
                        </form>
                    </ModalBody>
                </Modal>
            </Title>
            <P>{todo.desc}</P>
            <Button
                width={100}
                height={35}
                padding={5}
                color="white"
                bgColor="green"
                desc="삭제"
                handler={() => { onDeleteHandler(todo.id) }}>
            </Button>

            <Button
                width={100}
                height={35}
                padding={5}
                bgColor="white"
                color="black"
                desc={todo.isDone ? "취소" : "완료"}
                handler={() => { onCompleteHandler(todo.id, todo.isDone) }}>

            </Button>
            <Link to={`/todolist/${todo.id}`}>상세보기</Link>

        </TodoContainer>
    )
}
