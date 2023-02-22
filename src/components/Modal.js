import React from 'react'
import styled from '@emotion/styled'
import Portal from './Portal'
import { CSSTransition } from 'react-transition-group'
import './modal.css'

const Overlay = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Dim = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
`

const Container = styled.div`
    width: 800px;
    position: relative;
    width: 400px;
`


// 실제로 렌더링 될 컴포넌트를 propr로 받음
function Modal({ children, isOpen, onClose, selector }) {
    return (

        <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
            {/* // 포탈 영역은 최상위
                    // prop으로 selector 지정
                    // 이러면 하위 컴포넌트들은 selector로 지정한 요소의 하위에 렌더링 될것 */}
            <Portal selector={selector}>
                <Overlay>
                    {/* Dim 영역을 클릭 했을 때 모달이 닫힐 것 */}
                    <Dim onClick={onClose} />
                    <Container>{children}</Container>
                </Overlay>
            </Portal>
        </CSSTransition>
    )
}

export default Modal;