import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Main from './pages/Main';
import UpdateableProvider from './contexts/Updateable';
import ItemOperationProvider from './contexts/ItemOperation';


function App() {


  return (
    <Container className='border rounded mt-2' style={{ background: "#f5f5f5" }}>
      <UpdateableProvider>
        <ItemOperationProvider>
          <Main>
          </Main>
        </ItemOperationProvider>
      </UpdateableProvider>
    </Container>
  );
}

export default App;
