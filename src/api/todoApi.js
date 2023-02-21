import axios, { Axios } from "axios";


// 서버에 요청하는 api 파일은 이곳에서 관리
// axios 요청 들어가는 모든 모듈



// 컴포넌트가 렌더링 될때 호출
export const getTodos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`)
    
    // 리턴을 해줘야 useQuery 부분에서 응답부분을 데이터로 받을 수 있다.
    return response.data;
}
