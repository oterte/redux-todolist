import styled from 'styled-components';
import './App.css';
import TodoMain from './components/TodoMain';

const Layout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`

function App() {
  


  return (
    <>
      <Layout>
        <TodoMain/>
      </Layout>
    </>
  );
}

export default App;
