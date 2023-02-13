import { useRef } from "react"

//초기값
const initialState = {
    todos: [
        {
            id: 1,
            title: "타이틀 테스트",
            desc: "내용 테스트",
            isDone: false

        },
        {
            id: 2,
            title: '타이틀 테스트 2',
            desc: "내용 테스트 2",
            isDone: true
        }
    ]

}


const onSubmit = "TODO/TODO_SUBMIT"
const onDelete = "TODO/TODO_DELETE"
const onComplete = "TODO/TODO_COMPLETE"

// let nextId = 3

// export const change_todo = (payload) => {
//     return {
//         type: onChange,
//         payload: payload
//     }
// }
// 투두 추가

// 액션함수 
export const submit_todo = (payload) => {
    return {
        type: onSubmit,
        payload
    }

}

// 투두 삭제
export const delete_todo = (payload) => {
    return {
        type: onDelete,
        payload
    }
}
// 투두 토글
export const complete_todo = (payload) => {
    return {
        type: onComplete,
        payload
    }
}

// const initialState = { id: 0, title: "", body: "", isDone: false } //초기값

// 리듀서
const todolist = (state = initialState, action) => {
    switch (action.type) {
        case onSubmit:
            const {id, title, desc, isDone} = action.payload;
            const oldArr = [...state.todos];
            const newData = {id, title, desc, isDone};
            const newArr = [...oldArr, newData];

            return {
                todos: newArr
            }
        // 삭제
        case onDelete:
            
            // 객체안에 id라는 키값이 있는거 리턴
            return {
               todos: state.todos.filter((item) => item.id !== action.payload.id )

            }
        // 토글
        case onComplete:
            return {
                todos: state.todos.map((item) => item.id === action.payload.id
                ? {...item, isDone : !item.isDone}
                : item)
                
                
            }


        default:
            return state;
    }
}

export default todolist;