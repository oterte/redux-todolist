import axios from "axios";


// 서버에 요청하는 api 파일은 이곳에서 관리
// axios 요청 들어가는 모든 모듈



// 컴포넌트가 렌더링 될때 호출
export const getTodos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`)
    
    // 리턴을 해줘야 useQuery 부분에서 응답부분을 데이터로 받을 수 있다.
    return response.data;
}

// todo 추가
// 어떤 todo를 추가하는지 알아야 하기 때문에 인자에 newTodo
export const addTodo = async (newTodo) => {
    
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo)
}

// todo 삭제
export const deleteTodo = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`)
} 
// todo 토글

export const toggleTodo = async ({id, toggleDone}) => {
    console.log(id)
    console.log(toggleDone)
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`,{
        isDone : toggleDone === false ? !toggleDone : !toggleDone
    })
}

// state.todos.map((item) => item.id === action.payload.id
// ? {...item, isDone : !item.isDone}
// : item)

// 할일내용 수정
// 아직 수정중, 덜만든곳
export const updateTodoDesc = async ({id, changedesc}) => {
    console.log(id)
    console.log(changedesc)
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, {
        desc : changedesc
    })
}