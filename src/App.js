
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import Router from './shared/Router';

const Layout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`

function App() {
  
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
