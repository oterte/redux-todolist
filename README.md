# 인증 vs 인가

1. 인증
- 서비스를 이용하려는 유저가 '등록된 회원' 인지 확인하는 절차
2. 인가
- '특정 리소스에 접근할 수 있는 권한' 이 있는지 확인하는 절차

### http 프로토콜 통신의 특징

1. 무상태 -> 서버는 클라이언트의 상태를 기억하지 않는다. 따라서 각 요청마다 서버에서 요구하는 모든 상태 정보를 담아서 요청해야 한다.
- 상태값은 매 요청마다 클라이언트가 가지고 오기 때문에, 서버는 클라이언트의 상태를 별도로 기억할 필요 없이 주문받은 대로 응답해준다.
- 무상태라는 특성 덕분에 동일한 서버를 여러개로 확장시킬 수 있다.

2. 비연결성 -> 서버와 클라이언트는 연결되어 있지 않다. 서버 입장에서는 매번 새로운 요청이다.
- 비연결성으로 인해 최소한의 서버 자원으로 유지할 수 있게 해준다.
- 그러나 각 사용자별 요청이 잦은 서비스의 경우, 이러한 비연결성은 오히려 비효율적.


## 쿠키와 세션
1. 쿠키
- 무상태와 비연결성이라는 http 통신의 특징에도 불구하고 마치 서버가 클라이언트의 인증 상태를 기억하는 것처럼 구현할 수 있는 수단
- 쿠키란 브라우저에 저장되는 텍스트 파일이며 key-value 형태로 저장된다.
- 쿠키는 별도로 삭제처리하거나 유효기간이 만료되지 않는 이상 서버와 통신할 때 자동으로 주고받게 된다.
- 서버에서 특정 API 요청을 했을 때, 서버가 응답 시 header 안에 set-cookie 속성으로 쿠키 정보를 담아주면 응답을 받은 브라우저는 쿠키를 브라우저에 자동으로 저장
- 서버에 http요청을 할 때마다 브라우저에 저장되어 있는 쿠키는 자동으로 서버에 보내진다(단, 동일한 Origin 또는 CORS를 허용하는 Origin 에만 쿠키를 보낸다.)
- 쿠키는 클라이언트에서 직접 추가, 수정, 삭제할 수 있다.

* Origin과 CORS
- Origin이란 protocol+host+port를 의미 ex)http://localhost:3000/users?.... 부분에서 http://localhost:3000 이 부분이 origin
- CORS란 Cross Origin Resource Sharing의 약자, 다른 출처에 리소스를 요청하는 것을 허용하는 정책
- 브라우저는 보안상의 이유로 기본적으로 Same Origin Policy(SOP)를 원칙으로 하고 있지만, 서버와 클라이언트 각각 CORS 설정을 통해 상호합의된 웹사이트는 예외적으로
 서로 다른 출처임에도 API 요청이 가능