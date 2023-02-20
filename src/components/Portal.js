import React from 'react'
import { createPortal } from 'react-dom'

// 외부 DOM 에 렌더링하는 역할
function Portal({children, selector}) {
const rootElement = selector && document.querySelector(selector)

  return (
    <>
    {
        // createPortal(렌더링 할 children ,실제 렌더링 될 컴포넌트)
        rootElement ? createPortal(children, rootElement) : children
        // prop으로 전달받은 children이 rootElement에 렌더링 될 것
    }
    </>
  )
}

export default Portal